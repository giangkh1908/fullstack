import { Controller, Get } from "@nestjs/common";
import { StringService } from "./string.service";
import { NumberService } from "../number/number.service";

@Controller('string')
export class StringController {
    constructor(
        private readonly stringService: StringService,
        private readonly numberService: NumberService
    ) { }

    @Get()
    getString(): string {
        return this.stringService.getString() + ' ' + this.numberService.getNumber();
    }

}