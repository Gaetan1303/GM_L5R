import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Scenario } from './Scenario';
import { User } from './User';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @ManyToOne(() => User, { nullable: false })
  gm!: User;

  @OneToMany(() => User, user => user.room)
  players!: User[];

  @ManyToOne(() => Scenario, { eager: true, nullable: true })
  scenario!: Scenario;

  @Column({ default: 'waiting' })
  status!: 'waiting' | 'active' | 'paused' | 'completed';

  @Column('int', { default: 0 })
  currentScene!: number;

  @Column('simple-array', { default: '' })
  scenesHistory!: number[];

  @Column({ default: 6 })
  maxPlayers!: number;

  @Column({ default: false })
  isPrivate!: boolean;

  @Column({ nullable: true })
  password!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}