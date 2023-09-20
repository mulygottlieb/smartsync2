import { Module } from "@nestjs/common";
import { RolePermissionModuleBase } from "./base/rolePermission.module.base";
import { RolePermissionService } from "./rolePermission.service";
import { RolePermissionController } from "./rolePermission.controller";
import { RolePermissionResolver } from "./rolePermission.resolver";

@Module({
  imports: [RolePermissionModuleBase],
  controllers: [RolePermissionController],
  providers: [RolePermissionService, RolePermissionResolver],
  exports: [RolePermissionService],
})
export class RolePermissionModule {}
