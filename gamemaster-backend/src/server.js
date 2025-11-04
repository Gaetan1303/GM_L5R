const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');

const roomRoutes = require('./routes/roomRoutes');
const referenceRoutes = require('./routes/referenceRoutes');
const scenarioRoutes = require('./routes/scenarioRoutes');
const frontendRoutes = require('./routes/frontendRoutes');
const socketHandler = require('./services/socketHandler');

const app = express();
const server = http.createServer(app);

// CORS configuration - Support local dev + GitHub Pages
const allowedOrigins = [
  "http://localhost:4200",
  "http://localhost:3000",
  "http://localhost:3001",
  "https://gaetan1303.github.io",
  "https://gaetan1303.github.io/JDR-test"
];

const io = socketIo(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }
});

app.use(cors({
  origin: function (origin, callback) {
    // Autoriser les requêtes sans origin (ex: Postman, curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, true); // En développement, autoriser toutes les origines
      // En production, utiliser: callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware pour logger les requêtes
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Routes
app.use('/api/rooms', roomRoutes);
app.use('/api/reference', referenceRoutes);
app.use('/api/frontend', frontendRoutes); // Frontend-compatible data format
app.use('/api/scenarios', scenarioRoutes);

// Route de santé du serveur
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Serveur GameMaster L5R opérationnel!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Route pour obtenir les statistiques des connexions
app.get('/api/stats', (req, res) => {
  const stats = io.getConnectionStats ? io.getConnectionStats() : {
    totalConnections: 0,
    connectionsByRoom: {},
    connectionsByType: { gm: 0, player: 0 }
  };
  
  res.json({
    success: true,
    stats: stats,
    timestamp: new Date().toISOString()
  });
});

// Gestion des WebSockets
socketHandler(io);

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error('Erreur serveur:', err);
  res.status(500).json({
    success: false,
    message: 'Erreur interne du serveur',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Une erreur est survenue'
  });
});

// Route 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route non trouvée'
  });
});

// Par défaut, utiliser le port 3000 pour s'aligner avec le front JDR-test
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('====================================');
  console.log('     SERVEUR GAMEMASTER L5R');
  console.log('====================================');
  console.log(`Serveur démarré sur le port ${PORT}`);
  console.log(`API accessible sur http://localhost:${PORT}/api`);
  console.log(`WebSockets actifs pour les rooms en temps réel`);
  console.log(`Statistiques: http://localhost:${PORT}/api/stats`);
  console.log(`Santé: http://localhost:${PORT}/api/health`);
  console.log('====================================');
});

module.exports = app;