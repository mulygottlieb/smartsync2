import { Module } from "@nestjs/common";
import { OrganizationRecurringExpenseModuleBase } from "./base/organizationRecurringExpense.module.base";
import { OrganizationRecurringExpenseService } from "./organizationRecurringExpense.service";
import { OrganizationRecurringExpenseController } from "./organizationRecurringExpense.controller";
import { OrganizationRecurringExpenseResolver } from "./organizationRecurringExpense.resolver";

@Module({
  imports: [OrganizationRecurringExpenseModuleBase],
  controllers: [OrganizationRecurringExpenseController],
  providers: [
    OrganizationRecurringExpenseService,
    OrganizationRecurringExpenseResolver,
  ],
  exports: [OrganizationRecurringExpenseService],
})
export class OrganizationRecurringExpenseModule {}
