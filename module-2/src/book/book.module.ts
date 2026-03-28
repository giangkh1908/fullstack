import { Global, Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from 'src/mysql/schemas/book.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity])
  ],
  controllers: [BookController],
  providers: [
    BookService
  ],
  exports: [BookService],
})
export class BookModule {}