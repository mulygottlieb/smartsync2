import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeUpworkJobSearchCriterionService } from "./employeeUpworkJobSearchCriterion.service";
import { EmployeeUpworkJobSearchCriterionControllerBase } from "./base/employeeUpworkJobSearchCriterion.controller.base";

@swagger.ApiTags("employeeUpworkJobSearchCriteria")
@common.Controller("employeeUpworkJobSearchCriteria")
export class EmployeeUpworkJobSearchCriterionController extends EmployeeUpworkJobSearchCriterionControllerBase {
  constructor(
    protected readonly service: EmployeeUpworkJobSearchCriterionService
  ) {
    super(service);
  }
}
