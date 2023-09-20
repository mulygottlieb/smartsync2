import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailSentService } from "./emailSent.service";
import { EmailSentControllerBase } from "./base/emailSent.controller.base";

@swagger.ApiTags("emailSents")
@common.Controller("emailSents")
export class EmailSentController extends EmailSentControllerBase {
  constructor(protected readonly service: EmailSentService) {
    super(service);
  }
}
