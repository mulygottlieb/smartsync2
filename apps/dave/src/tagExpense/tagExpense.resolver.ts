import * as graphql from "@nestjs/graphql";
import { TagExpenseResolverBase } from "./base/tagExpense.resolver.base";
import { TagExpense } from "./base/TagExpense";
import { TagExpenseService } from "./tagExpense.service";

@graphql.Resolver(() => TagExpense)
export class TagExpenseResolver extends TagExpenseResolverBase {
  constructor(protected readonly service: TagExpenseService) {
    super(service);
  }
}
