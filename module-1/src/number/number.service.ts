import { Injectable } from "@nestjs/common";
import { NumDto } from "./number.dto";
@Injectable()
export class NumberService {
    getNumber(): number {
        return 12345;
    }

    createNumber(num: NumDto): string {
        return 'Number created successfully' + " " + num.id + " " + num.number;
    }
}
