import { Module } from "@nestjs/common";
import { TagIncomeModuleBase } from "./base/tagIncome.module.base";
import { TagIncomeService } from "./tagIncome.service";
import { TagIncomeController } from "./tagIncome.controller";
import { TagIncomeResolver } from "./tagIncome.resolver";

@Module({
  imports: [TagIncomeModuleBase],
  controllers: [TagIncomeController],
  providers: [TagIncomeService, TagIncomeResolver],
  exports: [TagIncomeService],
})
export class TagIncomeModule {}
