import { Module } from "@nestjs/common";
import { PipelineStageModuleBase } from "./base/pipelineStage.module.base";
import { PipelineStageService } from "./pipelineStage.service";
import { PipelineStageController } from "./pipelineStage.controller";
import { PipelineStageResolver } from "./pipelineStage.resolver";

@Module({
  imports: [PipelineStageModuleBase],
  controllers: [PipelineStageController],
  providers: [PipelineStageService, PipelineStageResolver],
  exports: [PipelineStageService],
})
export class PipelineStageModule {}
