
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User{

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'varchar', unique: true, length: 50, nullable: false})
  user: string;

  @Column({type: 'varchar', unique: true, length: 50, nullable: false})
  lastName: string;

  @Column({type: 'varchar', nullable: false})
  email: string;

  @Column({type: 'varchar', nullable: false})
  password: string;

  @Column({type: 'varchar', nullable: false})
  rol: string;

  @Column({type: 'varchar', nullable: false})
  image: string;

  @Column({type: 'boolean', nullable: false})
  isStudent: boolean;

  @Column({type: 'varchar', nullable: false})
  groups: string;

  @Column({type: 'varchar', nullable: false})
  departamnets: string;

  @Column({type: 'varchar', nullable: false})
  certifications: string;

  @Column({type: 'varchar', nullable: false})
  createdBy: string;

  @Column({type: 'varchar', nullable: false})
  updatedBy: string;

  @Column({type: 'boolean', nullable: false})
  alive: boolean;

  @Column({type: 'boolean', nullable: false})
  active: boolean;

  //  @Column({ type: "string"})
  //  timestamps: string;

    
}