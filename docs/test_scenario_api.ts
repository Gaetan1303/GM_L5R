

const BASE_URL = 'https://gm-l5r.onrender.com';

async function registerUser(email: string, password: string, username: string) {
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, username })
  });
  if (!res.ok) throw new Error(`Register failed: ${email}`);
  return res.json();
}

async function loginUser(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) throw new Error(`Login failed: ${email}`);
  return res.json();
}

async function createRoom(token: string, name: string) {
  const res = await fetch(`${BASE_URL}/api/rooms`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ name })
  });
  if (!res.ok) throw new Error('Room creation failed');
  return res.json();
}

async function createScenario(token: string, data: any) {
  const res = await fetch(`${BASE_URL}/api/scenarios`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Scenario creation failed');
  return res.json();
}

async function getScenario(token: string, id: number) {
  const res = await fetch(`${BASE_URL}/api/scenarios/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Get scenario failed');
  return res.json();
}

async function deleteScenario(token: string, id: number) {
  await fetch(`${BASE_URL}/api/scenarios/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
}

async function deleteRoom(token: string, id: number) {
  await fetch(`${BASE_URL}/api/rooms/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
}

async function main() {
  // 1. Création des utilisateurs
  const users = [
    { email: 'mj@test.com', password: 'test123', username: 'MJ' },
    { email: 'j1@test.com', password: 'test123', username: 'Joueur1' },
    { email: 'j2@test.com', password: 'test123', username: 'Joueur2' },
    { email: 'j3@test.com', password: 'test123', username: 'Joueur3' },
  ];
  const registered = [];
  for (const u of users) {
    try { registered.push(await registerUser(u.email, u.password, u.username)); }
    catch { /* déjà existant */ }
  }
  // 2. Connexion
  const tokens = [];
  for (const u of users) {
    const { token } = await loginUser(u.email, u.password);
    tokens.push(token);
  }
  // 3. Création de la room (par le MJ)
  const room = await createRoom(tokens[0], 'Salle de test');
  // 4. Création du scénario (par le MJ)
  const scenario = await createScenario(tokens[0], {
    name: 'Scénario Test',
    roomId: room.id,
    playerIds: registered.slice(1).map((u: any) => u.id),
    gmId: registered[0].id
  });
  // 5. Vérification
  const scenarioFetched = await getScenario(tokens[0], scenario.id);
  console.log('Scénario persistant:', scenarioFetched);
  // 6. Nettoyage
  await deleteScenario(tokens[0], scenario.id);
  await deleteRoom(tokens[0], room.id);
  console.log('Nettoyage terminé.');
}

main().catch(e => { console.error(e); process.exit(1); });
