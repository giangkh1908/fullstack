import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class LeafGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        // lay request
        const request = context.switchToHttp().getRequest();
        // lay header
        const headers = request.headers['1234'];
        if (headers === '1234') {
            return true;
        }
        return false;
    }
}

