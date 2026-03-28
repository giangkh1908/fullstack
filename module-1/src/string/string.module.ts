import { Module } from "@nestjs/common";
import { StringService } from "./string.service";
import { StringController } from "./string.controller";


@Module({
    imports: [],
    controllers: [StringController],
    providers: [StringService],
})
export class StringModule { }