import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PipelineStageService } from "./pipelineStage.service";
import { PipelineStageControllerBase } from "./base/pipelineStage.controller.base";

@swagger.ApiTags("pipelineStages")
@common.Controller("pipelineStages")
export class PipelineStageController extends PipelineStageControllerBase {
  constructor(protected readonly service: PipelineStageService) {
    super(service);
  }
}
