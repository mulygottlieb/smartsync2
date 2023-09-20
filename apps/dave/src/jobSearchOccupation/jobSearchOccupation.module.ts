import { Module } from "@nestjs/common";
import { JobSearchOccupationModuleBase } from "./base/jobSearchOccupation.module.base";
import { JobSearchOccupationService } from "./jobSearchOccupation.service";
import { JobSearchOccupationController } from "./jobSearchOccupation.controller";
import { JobSearchOccupationResolver } from "./jobSearchOccupation.resolver";

@Module({
  imports: [JobSearchOccupationModuleBase],
  controllers: [JobSearchOccupationController],
  providers: [JobSearchOccupationService, JobSearchOccupationResolver],
  exports: [JobSearchOccupationService],
})
export class JobSearchOccupationModule {}
