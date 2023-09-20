import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EstimateEmailService } from "./estimateEmail.service";
import { EstimateEmailControllerBase } from "./base/estimateEmail.controller.base";

@swagger.ApiTags("estimateEmails")
@common.Controller("estimateEmails")
export class EstimateEmailController extends EstimateEmailControllerBase {
  constructor(protected readonly service: EstimateEmailService) {
    super(service);
  }
}
