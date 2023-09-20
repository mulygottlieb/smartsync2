import { Module } from "@nestjs/common";
import { OrganizationPositionModuleBase } from "./base/organizationPosition.module.base";
import { OrganizationPositionService } from "./organizationPosition.service";
import { OrganizationPositionController } from "./organizationPosition.controller";
import { OrganizationPositionResolver } from "./organizationPosition.resolver";

@Module({
  imports: [OrganizationPositionModuleBase],
  controllers: [OrganizationPositionController],
  providers: [OrganizationPositionService, OrganizationPositionResolver],
  exports: [OrganizationPositionService],
})
export class OrganizationPositionModule {}
