import { DataSource } from "typeorm";
import { User } from "./models/User.js";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [User],
});
