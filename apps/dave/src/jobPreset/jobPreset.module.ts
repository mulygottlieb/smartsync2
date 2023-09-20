import { Module } from "@nestjs/common";
import { JobPresetModuleBase } from "./base/jobPreset.module.base";
import { JobPresetService } from "./jobPreset.service";
import { JobPresetController } from "./jobPreset.controller";
import { JobPresetResolver } from "./jobPreset.resolver";

@Module({
  imports: [JobPresetModuleBase],
  controllers: [JobPresetController],
  providers: [JobPresetService, JobPresetResolver],
  exports: [JobPresetService],
})
export class JobPresetModule {}
