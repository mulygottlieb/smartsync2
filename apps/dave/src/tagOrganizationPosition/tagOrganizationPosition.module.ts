import { Module } from "@nestjs/common";
import { TagOrganizationPositionModuleBase } from "./base/tagOrganizationPosition.module.base";
import { TagOrganizationPositionService } from "./tagOrganizationPosition.service";
import { TagOrganizationPositionController } from "./tagOrganizationPosition.controller";
import { TagOrganizationPositionResolver } from "./tagOrganizationPosition.resolver";

@Module({
  imports: [TagOrganizationPositionModuleBase],
  controllers: [TagOrganizationPositionController],
  providers: [TagOrganizationPositionService, TagOrganizationPositionResolver],
  exports: [TagOrganizationPositionService],
})
export class TagOrganizationPositionModule {}
