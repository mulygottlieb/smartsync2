import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PasswordResetService } from "./passwordReset.service";
import { PasswordResetControllerBase } from "./base/passwordReset.controller.base";

@swagger.ApiTags("passwordResets")
@common.Controller("passwordResets")
export class PasswordResetController extends PasswordResetControllerBase {
  constructor(protected readonly service: PasswordResetService) {
    super(service);
  }
}
