import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from '../mysql/schemas/book.entity';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  async getBook() {
    // caching có logic 
    // const cacheBook = await this.cacheManager.get<BookEntity[]>('books');
    // if (cacheBook) {
    //   return cacheBook;
    // }
    // // Nếu không có trong cache, truy vấn database
    // const books = await this.bookRepository.find();
    // // save into cache redis with key = 'books' and ttl = 60s
    // await this.cacheManager.set('books', books, 60000);


    // Trả về kết quả từ database (có thể đã được cache bởi CacheInterceptor)
    return this.bookRepository.find();
  }

  async createBook(): Promise<void> {
    const booksData = [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publishedYear: 1925,
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishedYear: 1960,
      },
      { title: '1984', author: 'George Orwell', publishedYear: 1949 },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        publishedYear: 1813,
      },
      {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        publishedYear: 1951,
      },
      { title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 },
      { title: 'Fahrenheit 451', author: 'Ray Bradbury', publishedYear: 1953 },
      { title: 'Moby-Dick', author: 'Herman Melville', publishedYear: 1851 },
      { title: 'War and Peace', author: 'Leo Tolstoy', publishedYear: 1869 },
      { title: 'The Alchemist', author: 'Paulo Coelho', publishedYear: 1988 },
    ];

    // Tạo mảng entity từ mảng data
    const books = this.bookRepository.create(booksData);

    // Lưu toàn bộ 10 cuốn sách vào database trong 1 query
    await this.bookRepository.save(books);
  }
}
