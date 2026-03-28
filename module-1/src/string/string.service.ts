import { Injectable } from "@nestjs/common";

@Injectable()
export class StringService {
    getString(): string {
        return 'Giang handsome boy';
    }
}