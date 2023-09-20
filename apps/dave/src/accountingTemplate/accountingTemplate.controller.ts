import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountingTemplateService } from "./accountingTemplate.service";
import { AccountingTemplateControllerBase } from "./base/accountingTemplate.controller.base";

@swagger.ApiTags("accountingTemplates")
@common.Controller("accountingTemplates")
export class AccountingTemplateController extends AccountingTemplateControllerBase {
  constructor(protected readonly service: AccountingTemplateService) {
    super(service);
  }
}
