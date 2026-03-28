import { IsNumber, Min, Max } from "class-validator";

export class NumDto {
    @IsNumber()
    id: number;
    @IsNumber()
    @Min(10)
    @Max(100)
    number: number;
}