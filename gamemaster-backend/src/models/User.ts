import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import { Room } from "./Room";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column({ length: 255 })
  password!: string; // Store hashed password only

  @Column({ length: 50 })
  name!: string; // Nom de l'utilisateur

  @Column({ default: 'joueur' })
  role!: string; // "GM" ou "joueur"

  @Column(() => Room)
  room!: Room;

  @CreateDateColumn()
  createdAt!: Date;
}
