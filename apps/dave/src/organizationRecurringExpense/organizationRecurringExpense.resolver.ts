import * as graphql from "@nestjs/graphql";
import { OrganizationRecurringExpenseResolverBase } from "./base/organizationRecurringExpense.resolver.base";
import { OrganizationRecurringExpense } from "./base/OrganizationRecurringExpense";
import { OrganizationRecurringExpenseService } from "./organizationRecurringExpense.service";

@graphql.Resolver(() => OrganizationRecurringExpense)
export class OrganizationRecurringExpenseResolver extends OrganizationRecurringExpenseResolverBase {
  constructor(protected readonly service: OrganizationRecurringExpenseService) {
    super(service);
  }
}
