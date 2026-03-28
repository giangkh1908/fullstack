import { Catch, ExceptionFilter, ArgumentsHost, HttpException } from "@nestjs/common";

@Catch(Error)
export class NumberFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(500).json({
            message: 'Internal server error',
        });
    }
}