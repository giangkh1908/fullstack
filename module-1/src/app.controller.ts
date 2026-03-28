import { Controller, Get, Inject } from '@nestjs/common';
import type { Logger } from '@nestjs/common';
import { AppService } from './app.service';
import envConfig from './env/env.config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Controller()
export class AppController {
  @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: Logger;
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): any {
    this.logger.log('Hello World');
    return envConfig();
  }

  @Get('test')
  getHelloTest(): string {
    return this.appService.getHello();
  }
}
