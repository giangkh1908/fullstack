import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { BookService } from './book.service';
import { BookEntity } from 'src/mysql/schemas/book.entity';
import { CacheInterceptor } from '@nestjs/cache-manager/dist/interceptors/cache.interceptor';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}


  // Sử dụng CacheInterceptor để tự động cache kết quả của phương thức này
  @UseInterceptors(CacheInterceptor)
  @Get()
  getBook(): Promise<BookEntity[]> {
    return this.bookService.getBook();
  }

  @Post()
  createBook(): Promise<void> {
    return this.bookService.createBook();
  }
}