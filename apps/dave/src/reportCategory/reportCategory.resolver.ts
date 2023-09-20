import * as graphql from "@nestjs/graphql";
import { ReportCategoryResolverBase } from "./base/reportCategory.resolver.base";
import { ReportCategory } from "./base/ReportCategory";
import { ReportCategoryService } from "./reportCategory.service";

@graphql.Resolver(() => ReportCategory)
export class ReportCategoryResolver extends ReportCategoryResolverBase {
  constructor(protected readonly service: ReportCategoryService) {
    super(service);
  }
}
