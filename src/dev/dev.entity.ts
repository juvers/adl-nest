import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('devs')
export class Dev {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  firstname: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  lastname: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255 })
  squad: string;

  @ApiProperty()
  @Column({ type: 'integer', nullable: true })
  yearofservice: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  role: string;

  @ApiProperty()
  @Column({ type: 'integer', nullable: true })
  experience: number;

  @ApiProperty()
  @Column({ type: 'numeric', nullable: true })
  salary: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  preferredlanguage: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  stacklayer: string;

  @ApiProperty()
  @Column({ type: 'text', array: true, nullable: true })
  coreskills: string[];

  @ApiProperty()
  @Column({ type: 'integer', nullable: true })
  tierlevel: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  image: string;
}
