import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import envConfig from './env/env.config';
import { UserEntity } from './mysql/schemas/user.entity';
import { EnvModule } from './env';
import { BookEntity } from './mysql/schemas/book.entity';
import { BookModule } from './book';
import { CacheModule } from '@nestjs/cache-manager';
import KeyvRedis, { Keyv } from '@keyv/redis';
import { CacheableMemory } from 'cacheable';

@Module({
  imports: [
    EnvModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envConfig().database.host,
      port: envConfig().database.port,
      username: envConfig().database.username,
      password: envConfig().database.password,
      database: envConfig().database.database,
      entities: [UserEntity, BookEntity],
      synchronize: true,
    }),
    CacheModule.registerAsync({
      useFactory: async () => {
        return {
          stores: [
            new KeyvRedis('redis://localhost:6379'),
          ],
        };
      },
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([UserEntity, BookEntity]),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
