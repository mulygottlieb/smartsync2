import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateTechnologyService } from "./candidateTechnology.service";
import { CandidateTechnologyControllerBase } from "./base/candidateTechnology.controller.base";

@swagger.ApiTags("candidateTechnologies")
@common.Controller("candidateTechnologies")
export class CandidateTechnologyController extends CandidateTechnologyControllerBase {
  constructor(protected readonly service: CandidateTechnologyService) {
    super(service);
  }
}
