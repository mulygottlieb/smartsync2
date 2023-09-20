import { Module } from "@nestjs/common";
import { TagExpenseModuleBase } from "./base/tagExpense.module.base";
import { TagExpenseService } from "./tagExpense.service";
import { TagExpenseController } from "./tagExpense.controller";
import { TagExpenseResolver } from "./tagExpense.resolver";

@Module({
  imports: [TagExpenseModuleBase],
  controllers: [TagExpenseController],
  providers: [TagExpenseService, TagExpenseResolver],
  exports: [TagExpenseService],
})
export class TagExpenseModule {}
