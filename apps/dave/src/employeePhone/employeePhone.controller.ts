import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeePhoneService } from "./employeePhone.service";
import { EmployeePhoneControllerBase } from "./base/employeePhone.controller.base";

@swagger.ApiTags("employeePhones")
@common.Controller("employeePhones")
export class EmployeePhoneController extends EmployeePhoneControllerBase {
  constructor(protected readonly service: EmployeePhoneService) {
    super(service);
  }
}
