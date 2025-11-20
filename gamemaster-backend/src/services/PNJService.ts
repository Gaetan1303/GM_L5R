// Exemple d’implémentation du service PNJ pour BigData
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';
import type { IPNJService } from '../routes/pnjRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../../data/lore/personnages');

export class PNJService implements IPNJService {
  async getAllPNJ() {
    // Pour BigData, remplacer par une vraie source scalable (DB, cluster, etc.)
    const files = await fs.readdir(DATA_DIR);
    const pnjs = await Promise.all(
      files.filter(f => f.endsWith('.json')).map(async file => {
        const data = await fs.readFile(path.join(DATA_DIR, file), 'utf-8');
        return JSON.parse(data);
      })
    );
    return pnjs;
  }

  async getPNJById(id: string) {
    try {
      const data = await fs.readFile(path.join(DATA_DIR, `${id}.json`), 'utf-8');
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  async searchPNJByClan(clan: string) {
    const pnjs = await this.getAllPNJ();
    return pnjs.filter((pnj: any) => pnj.clan && pnj.clan.toLowerCase() === clan.toLowerCase());
  }
}
