import { Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookEntity } from 'src/mysql/schemas/book.entity';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBook(): Promise<BookEntity[]> {
    return this.bookService.getBook();
  }

  @Post()
  createBook(): Promise<void> {
    return this.bookService.createBook();
  }
}