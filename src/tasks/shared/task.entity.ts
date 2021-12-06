import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nome: string;

}