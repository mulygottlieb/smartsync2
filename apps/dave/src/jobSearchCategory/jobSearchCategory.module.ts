import { Module } from "@nestjs/common";
import { JobSearchCategoryModuleBase } from "./base/jobSearchCategory.module.base";
import { JobSearchCategoryService } from "./jobSearchCategory.service";
import { JobSearchCategoryController } from "./jobSearchCategory.controller";
import { JobSearchCategoryResolver } from "./jobSearchCategory.resolver";

@Module({
  imports: [JobSearchCategoryModuleBase],
  controllers: [JobSearchCategoryController],
  providers: [JobSearchCategoryService, JobSearchCategoryResolver],
  exports: [JobSearchCategoryService],
})
export class JobSearchCategoryModule {}
