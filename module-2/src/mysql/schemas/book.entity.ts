import { Entity, Column, PrimaryGeneratedColumn, In, Index } from 'typeorm';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ nullable: true })
  publishedYear: number;
}
