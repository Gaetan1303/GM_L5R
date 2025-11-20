import 'reflect-metadata';
import { AppDataSource } from '../../gamemaster-backend/src/data-source.js';
import { User } from '../../gamemaster-backend/src/models/User.js';
import { Scenario } from '../../gamemaster-backend/src/models/Scenario.js';
import { Room } from '../../gamemaster-backend/src/models/Room.js';
import { PlayerInRoom } from '../../gamemaster-backend/src/models/PlayerInRoom.js';
import { Column } from 'typeorm';

// Patch dynamique du décorateur de la colonne email pour TypeORM (sans toucher au code source)
Reflect.deleteProperty(User.prototype, 'email');
Column('varchar', { unique: true })(User.prototype, 'email');

async function main() {
  await AppDataSource.initialize();
  console.log('Connexion à la base OK');

  // 1. Création du GM et des joueurs
  const gm = AppDataSource.manager.create(User, {
    email: 'gm_test@l5r.com',
    password: 'hash_gm',
    name: 'GM Test',
    role: 'GM',
  });
  const joueur1 = AppDataSource.manager.create(User, {
    email: 'joueur1_test@l5r.com',
    password: 'hash_j1',
    name: 'Joueur 1 Test',
    role: 'joueur',
  });
  const joueur2 = AppDataSource.manager.create(User, {
    email: 'joueur2_test@l5r.com',
    password: 'hash_j2',
    name: 'Joueur 2 Test',
    role: 'joueur',
  });
  const joueur3 = AppDataSource.manager.create(User, {
    email: 'joueur3_test@l5r.com',
    password: 'hash_j3',
    name: 'Joueur 3 Test',
    role: 'joueur',
  });
  await AppDataSource.manager.save([gm, joueur1, joueur2, joueur3]);
  console.log('Utilisateurs créés');

  // 2. Création du scénario
  const scenario = AppDataSource.manager.create(Scenario, {
    title: 'Scénario Test Persistance',
    synopsis: 'Test persistance avec 3 joueurs et 1 GM',
    hooks: ['hook1', 'hook2'],
    difficulty: 'standard',
    tags: ['test'],
  });
  await AppDataSource.manager.save(scenario);
  console.log('Scénario créé');

  // 3. Création de la room
  const room = AppDataSource.manager.create(Room, {
    name: 'Room Test',
    gm: gm,
    scenario: scenario,
    status: 'active',
    currentScene: 0,
    scenesHistory: [],
    maxPlayers: 6,
    isPrivate: false,
  });
  await AppDataSource.manager.save(room);
  console.log('Room créée');

  // 4. Ajout des joueurs dans la room
  const pir1 = AppDataSource.manager.create(PlayerInRoom, { room, user: joueur1, role: 'player' });
  const pir2 = AppDataSource.manager.create(PlayerInRoom, { room, user: joueur2, role: 'player' });
  const pir3 = AppDataSource.manager.create(PlayerInRoom, { room, user: joueur3, role: 'player' });
  const pirGM = AppDataSource.manager.create(PlayerInRoom, { room, user: gm, role: 'gm' });
  await AppDataSource.manager.save([pir1, pir2, pir3, pirGM]);
  console.log('Joueurs et GM ajoutés à la room');

  // 5. Vérification persistance
  const rooms = await AppDataSource.manager.find(Room, { relations: ['gm', 'scenario'] });
  const players = await AppDataSource.manager.find(PlayerInRoom, { relations: ['room', 'user'] });
  console.log('Rooms:', rooms);
  console.log('Players in room:', players);

  // 6. Nettoyage
  await AppDataSource.manager.delete(PlayerInRoom, { room: { id: room.id } });
  await AppDataSource.manager.delete(Room, { id: room.id });
  await AppDataSource.manager.delete(Scenario, { id: scenario.id });
  await AppDataSource.manager.delete(User, [gm.id, joueur1.id, joueur2.id, joueur3.id]);
  console.log('Nettoyage terminé');

  await AppDataSource.destroy();
}

main().catch(console.error);
