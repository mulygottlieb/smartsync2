import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobSearchOccupationService } from "./jobSearchOccupation.service";
import { JobSearchOccupationControllerBase } from "./base/jobSearchOccupation.controller.base";

@swagger.ApiTags("jobSearchOccupations")
@common.Controller("jobSearchOccupations")
export class JobSearchOccupationController extends JobSearchOccupationControllerBase {
  constructor(protected readonly service: JobSearchOccupationService) {
    super(service);
  }
}
