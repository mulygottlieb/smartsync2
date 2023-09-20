import * as graphql from "@nestjs/graphql";
import { RolePermissionResolverBase } from "./base/rolePermission.resolver.base";
import { RolePermission } from "./base/RolePermission";
import { RolePermissionService } from "./rolePermission.service";

@graphql.Resolver(() => RolePermission)
export class RolePermissionResolver extends RolePermissionResolverBase {
  constructor(protected readonly service: RolePermissionService) {
    super(service);
  }
}
