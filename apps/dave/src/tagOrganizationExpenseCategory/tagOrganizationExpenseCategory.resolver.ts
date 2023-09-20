import * as graphql from "@nestjs/graphql";
import { TagOrganizationExpenseCategoryResolverBase } from "./base/tagOrganizationExpenseCategory.resolver.base";
import { TagOrganizationExpenseCategory } from "./base/TagOrganizationExpenseCategory";
import { TagOrganizationExpenseCategoryService } from "./tagOrganizationExpenseCategory.service";

@graphql.Resolver(() => TagOrganizationExpenseCategory)
export class TagOrganizationExpenseCategoryResolver extends TagOrganizationExpenseCategoryResolverBase {
  constructor(
    protected readonly service: TagOrganizationExpenseCategoryService
  ) {
    super(service);
  }
}
