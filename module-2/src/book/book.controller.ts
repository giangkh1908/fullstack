import { Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBook(): string {
    return this.bookService.getBook();
  }

  @Post()
  createBook(): Promise<void> {
    return this.bookService.createBook();
  }
}