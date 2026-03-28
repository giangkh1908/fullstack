import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from '../mysql/schemas/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity) private readonly bookRepository: Repository<BookEntity> 
  ) {}

  getBook(): string {
    return 'I have a book';
  }

  async createBook(): Promise<void> {
    const book = this.bookRepository.create({
      title: 'The Great Gatsby',  
      author: 'F. Scott Fitzgerald',
      publishedYear: 1925,
    });
    await this.bookRepository.save(book);
  }

}