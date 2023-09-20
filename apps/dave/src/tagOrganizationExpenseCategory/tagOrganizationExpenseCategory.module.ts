import { Module } from "@nestjs/common";
import { TagOrganizationExpenseCategoryModuleBase } from "./base/tagOrganizationExpenseCategory.module.base";
import { TagOrganizationExpenseCategoryService } from "./tagOrganizationExpenseCategory.service";
import { TagOrganizationExpenseCategoryController } from "./tagOrganizationExpenseCategory.controller";
import { TagOrganizationExpenseCategoryResolver } from "./tagOrganizationExpenseCategory.resolver";

@Module({
  imports: [TagOrganizationExpenseCategoryModuleBase],
  controllers: [TagOrganizationExpenseCategoryController],
  providers: [
    TagOrganizationExpenseCategoryService,
    TagOrganizationExpenseCategoryResolver,
  ],
  exports: [TagOrganizationExpenseCategoryService],
})
export class TagOrganizationExpenseCategoryModule {}
