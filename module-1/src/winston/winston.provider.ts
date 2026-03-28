import { Provider } from "@nestjs/common";
import * as winston from 'winston';

export const WinstonProvider: Provider = {
    provide: 'WINSTON_MODULE_PROVIDER',
    useFactory: () => {
        return winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: 'error.log', level: 'info' }),
            ],
        });
    }
}