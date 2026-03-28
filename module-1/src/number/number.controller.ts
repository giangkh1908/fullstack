import { Controller, Get, UseFilters, UseGuards, UseInterceptors, UsePipes } from "@nestjs/common";
import { NumberService } from "./number.service";
import { NumberGuard } from "./number.guard";
import { LeafGuard } from "./leaf.guard";
import { LoggingInterceptor } from "./logging.interceptor";
import { TransformInterceptor } from "./transform.interceptor";
import { Body, Post } from "@nestjs/common";
import { NumDto } from "./number.dto";
import { ValidationPipe } from "@nestjs/common";
import { NumberFilter } from "./number.filter";


@Controller('number')
export class NumberController {
    constructor(private readonly numberService: NumberService) { }

    @UseGuards(NumberGuard, LeafGuard)
    @UseInterceptors(LoggingInterceptor, TransformInterceptor)
    @Get()
    getNumber(): number {
        return this.numberService.getNumber();
    }

    @UsePipes(ValidationPipe)
    @UseFilters(NumberFilter)
    @Post('create')
    createNumber(@Body() num: NumDto): string {
        throw new Error('Error from controller')
        return this.numberService.createNumber(num);
    }

}
