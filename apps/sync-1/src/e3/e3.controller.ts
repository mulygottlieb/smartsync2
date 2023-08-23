import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { E3Service } from "./e3.service";
import { E3ControllerBase } from "./base/e3.controller.base";

@swagger.ApiTags("e3s")
@common.Controller("e3s")
export class E3Controller extends E3ControllerBase {
  constructor(
    protected readonly service: E3Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
