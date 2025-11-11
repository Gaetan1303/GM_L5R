import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ length: 255 })
  password!: string; // Store hashed password only

  @Column({ length: 50 })
  name!: string; // Nom de l'utilisateur

  @Column({ default: 'joueur' })
  role!: string; // "GM" ou "joueur"

  @CreateDateColumn()
  createdAt!: Date;
}
