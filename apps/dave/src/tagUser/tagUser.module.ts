import { Module } from "@nestjs/common";
import { TagUserModuleBase } from "./base/tagUser.module.base";
import { TagUserService } from "./tagUser.service";
import { TagUserController } from "./tagUser.controller";
import { TagUserResolver } from "./tagUser.resolver";

@Module({
  imports: [TagUserModuleBase],
  controllers: [TagUserController],
  providers: [TagUserService, TagUserResolver],
  exports: [TagUserService],
})
export class TagUserModule {}
