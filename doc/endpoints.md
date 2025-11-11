# Tableau récapitulatif des endpoints REST et WebSocket

## Endpoints REST principaux

| Méthode | Endpoint                                 | Description                                 |
|---------|------------------------------------------|---------------------------------------------|
| GET     | /api/rooms                              | Liste des rooms publiques                   |
| GET     | /api/rooms/stats                        | Statistiques globales                       |
| GET     | /api/rooms/:roomId                      | Détail d'une room                           |
| GET     | /api/rooms/gm/:gmId                     | Rooms créées par un GM                      |
| GET     | /api/rooms/player/:playerId             | Rooms où un joueur est présent              |
| POST    | /api/rooms                              | Créer une room                              |
| POST    | /api/rooms/:roomId/join                 | Rejoindre une room                          |
| POST    | /api/rooms/:roomId/leave                | Quitter une room                            |
| PUT     | /api/rooms/:roomId/status               | Changer le statut d'une room (GM)           |
| DELETE  | /api/rooms/:roomId                      | Supprimer une room (GM)                     |
| GET     | /api/scenarios                          | Liste des scénarios                         |
| GET     | /api/scenarios/:id                      | Détail d'un scénario                        |
| POST    | /api/scenarios                          | Créer un scénario                           |
| POST    | /api/scenarios/generate                 | Générer un scénario                         |
| DELETE  | /api/scenarios/:id                      | Supprimer un scénario                       |
| POST    | /api/rooms/with-scenario                | Créer une room avec scénario                |
| PUT     | /api/rooms/:roomId/scenario/scene       | Changer la scène courante d'une room        |

## Événements WebSocket principaux

| Event                | Payload / Ack                        | Description                                 |
|----------------------|--------------------------------------|---------------------------------------------|
| create-room          | {name, gmId, ...} / ack              | Créer une room (avec ou sans scénario)      |
| list-rooms           |                                      | Liste des rooms                             |
| find-room            | {roomId}                             | Détail d'une room                           |
| join-room            | {roomId, playerId, ...} / ack        | Rejoindre une room                          |
| chat                 | {roomId, message}                    | Envoyer un message (compat JDR-test)        |
| chat-message         | {roomId, message, user}              | Diffusion d'un message                     |
| roll-dice            | {roomId, dice}                       | Lancer de dés                               |
| dice                 | {roomId, result}                     | Résultat de dés (compat JDR-test)           |
| update-character     | {roomId, character} / ack             | MAJ d'un personnage                        |
| gm-action            | {...}                                | Action MJ (guardée)                         |
| player-action        | {...}                                | Action joueur (guardée)                     |
| change-room-status   | {roomId, status}                     | Changer le statut (GM)                      |
| set-current-scene    | {roomId, sceneIndex} / ack            | Changer la scène courante (GM)              |
| scene-changed        | {roomId, currentScene}                | Diffusion de la nouvelle scène              |
