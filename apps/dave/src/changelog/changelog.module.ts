import { Module } from "@nestjs/common";
import { ChangelogModuleBase } from "./base/changelog.module.base";
import { ChangelogService } from "./changelog.service";
import { ChangelogController } from "./changelog.controller";
import { ChangelogResolver } from "./changelog.resolver";

@Module({
  imports: [ChangelogModuleBase],
  controllers: [ChangelogController],
  providers: [ChangelogService, ChangelogResolver],
  exports: [ChangelogService],
})
export class ChangelogModule {}
