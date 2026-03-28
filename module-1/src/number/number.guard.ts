import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class NumberGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        // lay request
        const request = context.switchToHttp().getRequest();
        // lay header
        const headers = request.headers['123'];
        if (headers === '123') {
            return true;
        }
        return false;
    }
}

