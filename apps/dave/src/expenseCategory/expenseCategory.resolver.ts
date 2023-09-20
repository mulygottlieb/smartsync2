import * as graphql from "@nestjs/graphql";
import { ExpenseCategoryResolverBase } from "./base/expenseCategory.resolver.base";
import { ExpenseCategory } from "./base/ExpenseCategory";
import { ExpenseCategoryService } from "./expenseCategory.service";

@graphql.Resolver(() => ExpenseCategory)
export class ExpenseCategoryResolver extends ExpenseCategoryResolverBase {
  constructor(protected readonly service: ExpenseCategoryService) {
    super(service);
  }
}
