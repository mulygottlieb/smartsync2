import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagIncomeService } from "./tagIncome.service";
import { TagIncomeControllerBase } from "./base/tagIncome.controller.base";

@swagger.ApiTags("tagIncomes")
@common.Controller("tagIncomes")
export class TagIncomeController extends TagIncomeControllerBase {
  constructor(protected readonly service: TagIncomeService) {
    super(service);
  }
}
