import { Module } from "@nestjs/common";
import { PipelineModuleBase } from "./base/pipeline.module.base";
import { PipelineService } from "./pipeline.service";
import { PipelineController } from "./pipeline.controller";
import { PipelineResolver } from "./pipeline.resolver";

@Module({
  imports: [PipelineModuleBase],
  controllers: [PipelineController],
  providers: [PipelineService, PipelineResolver],
  exports: [PipelineService],
})
export class PipelineModule {}
