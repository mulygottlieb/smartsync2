import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobPresetService } from "./jobPreset.service";
import { JobPresetControllerBase } from "./base/jobPreset.controller.base";

@swagger.ApiTags("jobPresets")
@common.Controller("jobPresets")
export class JobPresetController extends JobPresetControllerBase {
  constructor(protected readonly service: JobPresetService) {
    super(service);
  }
}
