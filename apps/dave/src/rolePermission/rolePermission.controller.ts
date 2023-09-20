import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RolePermissionService } from "./rolePermission.service";
import { RolePermissionControllerBase } from "./base/rolePermission.controller.base";

@swagger.ApiTags("rolePermissions")
@common.Controller("rolePermissions")
export class RolePermissionController extends RolePermissionControllerBase {
  constructor(protected readonly service: RolePermissionService) {
    super(service);
  }
}
