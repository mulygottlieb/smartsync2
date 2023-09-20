import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomSmtpService } from "./customSmtp.service";
import { CustomSmtpControllerBase } from "./base/customSmtp.controller.base";

@swagger.ApiTags("customSmtps")
@common.Controller("customSmtps")
export class CustomSmtpController extends CustomSmtpControllerBase {
  constructor(protected readonly service: CustomSmtpService) {
    super(service);
  }
}
