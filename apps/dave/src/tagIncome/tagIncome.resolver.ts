import * as graphql from "@nestjs/graphql";
import { TagIncomeResolverBase } from "./base/tagIncome.resolver.base";
import { TagIncome } from "./base/TagIncome";
import { TagIncomeService } from "./tagIncome.service";

@graphql.Resolver(() => TagIncome)
export class TagIncomeResolver extends TagIncomeResolverBase {
  constructor(protected readonly service: TagIncomeService) {
    super(service);
  }
}
