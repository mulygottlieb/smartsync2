import { Module } from "@nestjs/common";
import { ExpenseCategoryModuleBase } from "./base/expenseCategory.module.base";
import { ExpenseCategoryService } from "./expenseCategory.service";
import { ExpenseCategoryController } from "./expenseCategory.controller";
import { ExpenseCategoryResolver } from "./expenseCategory.resolver";

@Module({
  imports: [ExpenseCategoryModuleBase],
  controllers: [ExpenseCategoryController],
  providers: [ExpenseCategoryService, ExpenseCategoryResolver],
  exports: [ExpenseCategoryService],
})
export class ExpenseCategoryModule {}
