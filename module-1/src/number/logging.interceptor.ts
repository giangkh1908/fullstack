import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // lay thoi gian hien tai
        const now = Date.now();
        // goi next chay controller
        return next.handle()
            .pipe(
                tap(() => {
                    // lay thoi gian ket thuc
                    const after = Date.now();

                    const time = after - now;
                    console.log(`Request took ${time}ms`);
                })
            );
    }
}