import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('devs')
export class Dev {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  firstname: string;

  @Column({ type: 'varchar', length: 255 })
  lastname: string;

  @Column({ type: 'varchar', length: 255 })
  squad: string;

  @Column({ type: 'integer', nullable: true })
  yearofservice: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  role: string;

  @Column({ type: 'integer', nullable: true })
  experience: number;

  @Column({ type: 'numeric', nullable: true })
  salary: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  preferredlanguage: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  stacklayer: string;

  @Column({ type: 'text', array: true, nullable: true })
  coreskills: string[];

  @Column({ type: 'integer', nullable: true })
  tierlevel: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image: string;
}
