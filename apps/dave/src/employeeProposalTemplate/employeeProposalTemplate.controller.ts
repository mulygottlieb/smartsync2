import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeProposalTemplateService } from "./employeeProposalTemplate.service";
import { EmployeeProposalTemplateControllerBase } from "./base/employeeProposalTemplate.controller.base";

@swagger.ApiTags("employeeProposalTemplates")
@common.Controller("employeeProposalTemplates")
export class EmployeeProposalTemplateController extends EmployeeProposalTemplateControllerBase {
  constructor(protected readonly service: EmployeeProposalTemplateService) {
    super(service);
  }
}
