import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E2Service } from "./e2.service";
import { E2ControllerBase } from "./base/e2.controller.base";

@swagger.ApiTags("e2s")
@common.Controller("e2s")
export class E2Controller extends E2ControllerBase {
  constructor(
    protected readonly service: E2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
