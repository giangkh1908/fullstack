import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumberModule } from './number';
import { StringModule } from './string';
import { EnvModule } from './env';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [NumberModule, StringModule, EnvModule, WinstonModule.forRootAsync({
    useFactory: () => {
      return {
        level: 'info',
        format: winston.format.json(),
        transports: [
          new winston.transports.Console(),
          new winston.transports.File({ filename: 'error.log', level: 'info' }),
        ],
      };
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
