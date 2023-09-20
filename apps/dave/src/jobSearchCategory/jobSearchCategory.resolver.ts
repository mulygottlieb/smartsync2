import * as graphql from "@nestjs/graphql";
import { JobSearchCategoryResolverBase } from "./base/jobSearchCategory.resolver.base";
import { JobSearchCategory } from "./base/JobSearchCategory";
import { JobSearchCategoryService } from "./jobSearchCategory.service";

@graphql.Resolver(() => JobSearchCategory)
export class JobSearchCategoryResolver extends JobSearchCategoryResolverBase {
  constructor(protected readonly service: JobSearchCategoryService) {
    super(service);
  }
}
