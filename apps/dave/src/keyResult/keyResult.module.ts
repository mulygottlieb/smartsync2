import { Module } from "@nestjs/common";
import { KeyResultModuleBase } from "./base/keyResult.module.base";
import { KeyResultService } from "./keyResult.service";
import { KeyResultController } from "./keyResult.controller";
import { KeyResultResolver } from "./keyResult.resolver";

@Module({
  imports: [KeyResultModuleBase],
  controllers: [KeyResultController],
  providers: [KeyResultService, KeyResultResolver],
  exports: [KeyResultService],
})
export class KeyResultModule {}
