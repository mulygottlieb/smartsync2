import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateDepartmentService } from "./candidateDepartment.service";
import { CandidateDepartmentControllerBase } from "./base/candidateDepartment.controller.base";

@swagger.ApiTags("candidateDepartments")
@common.Controller("candidateDepartments")
export class CandidateDepartmentController extends CandidateDepartmentControllerBase {
  constructor(protected readonly service: CandidateDepartmentService) {
    super(service);
  }
}
