import * as graphql from "@nestjs/graphql";
import { TagEmployeeLevelResolverBase } from "./base/tagEmployeeLevel.resolver.base";
import { TagEmployeeLevel } from "./base/TagEmployeeLevel";
import { TagEmployeeLevelService } from "./tagEmployeeLevel.service";

@graphql.Resolver(() => TagEmployeeLevel)
export class TagEmployeeLevelResolver extends TagEmployeeLevelResolverBase {
  constructor(protected readonly service: TagEmployeeLevelService) {
    super(service);
  }
}
