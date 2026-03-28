import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ nullable: true })
  publishedYear: number;
}
