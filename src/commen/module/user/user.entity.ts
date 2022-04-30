import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

// entity用来装饰一个实体
@Entity()
@Unique('user', ['name'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
