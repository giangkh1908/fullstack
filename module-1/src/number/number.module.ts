import { Global, Module } from "@nestjs/common";
import { NumberService } from "./number.service";
import { NumberController } from "./number.controller";
import { NumberGuard } from "./number.guard";
import { LeafGuard } from "./leaf.guard";
@Global()
@Module({
    imports: [],
    controllers: [NumberController],
    providers: [NumberService, NumberGuard, LeafGuard],
    exports: [
        NumberService,
    ],
})
export class NumberModule { }