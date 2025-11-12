
import 'dotenv/config';
import { DataSource } from "typeorm";

import { User } from "./models/User.js";
import { Scene } from "./models/Scene.js";
import { Scenario } from "./models/Scenario.js";


const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL n\'est pas défini dans les variables d\'environnement.');
}

// Détection du mode (dev/prod) pour charger les entités au bon chemin
const isProd = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod';
const entities = isProd
  ? [
      'dist/models/**/*.js',
      'dist/models/*.js'
    ]
  : [User, Scene, Scenario];

export const AppDataSource = new DataSource({
  type: "postgres",
  url: databaseUrl,
  synchronize: true,
  logging: false,
  entities,
  ssl: { rejectUnauthorized: false }
});
