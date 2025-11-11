# Documentation technique — GM_L5R

Ce dossier contient les principaux diagrammes et documents techniques du backend. Chaque diagramme est accompagné d'une brève description pour faciliter la compréhension de l'architecture et des flux du projet.

## Sommaire des diagrammes

- **architecture_backend.md** : Vue d'ensemble des composants backend et de leurs interactions (API, services, stockage, scripts).
- **classes_backend.md** : Diagramme de classes simplifié des principaux modèles (Room, User, Scenario, Scene).
- **cycle_vie_room.md** : Diagramme d'état du cycle de vie d'une session de jeu (Room).
- **flux_creation_session.md** : Séquence de création d'une session de jeu avec ou sans scénario.
- **flux_changement_scene.md** : Séquence de changement de scène par le GM et diffusion aux joueurs.
- **diagramme de classe.md** : (À harmoniser ou fusionner avec classes_backend.md si redondant)
- **rapport de l'IA.md** : (Rapport d'analyse ou d'audit, à compléter si besoin)

## Conseils
- Pour chaque diagramme, se référer à l'introduction du fichier pour le contexte d'usage.
- Harmoniser les titres et explications si besoin.
- Compléter ou corriger les diagrammes selon l'évolution du code.

## Limites Render & base de données
- Hébergement sur Render : attention à la persistance (stockage en mémoire ou JSON recommandé).
- Base de données limitée à 1Go : éviter les stockages volumineux, prévoir un nettoyage périodique des rooms/scénarios.
