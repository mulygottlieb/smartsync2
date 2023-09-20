import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeJobPresetService } from "./employeeJobPreset.service";
import { EmployeeJobPresetControllerBase } from "./base/employeeJobPreset.controller.base";

@swagger.ApiTags("employeeJobPresets")
@common.Controller("employeeJobPresets")
export class EmployeeJobPresetController extends EmployeeJobPresetControllerBase {
  constructor(protected readonly service: EmployeeJobPresetService) {
    super(service);
  }
}
