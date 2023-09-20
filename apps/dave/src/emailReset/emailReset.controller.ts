import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailResetService } from "./emailReset.service";
import { EmailResetControllerBase } from "./base/emailReset.controller.base";

@swagger.ApiTags("emailResets")
@common.Controller("emailResets")
export class EmailResetController extends EmailResetControllerBase {
  constructor(protected readonly service: EmailResetService) {
    super(service);
  }
}
