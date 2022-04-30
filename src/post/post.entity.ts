import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// entity用来装饰一个实体
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;
}
