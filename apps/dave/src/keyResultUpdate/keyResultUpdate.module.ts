import { Module } from "@nestjs/common";
import { KeyResultUpdateModuleBase } from "./base/keyResultUpdate.module.base";
import { KeyResultUpdateService } from "./keyResultUpdate.service";
import { KeyResultUpdateController } from "./keyResultUpdate.controller";
import { KeyResultUpdateResolver } from "./keyResultUpdate.resolver";

@Module({
  imports: [KeyResultUpdateModuleBase],
  controllers: [KeyResultUpdateController],
  providers: [KeyResultUpdateService, KeyResultUpdateResolver],
  exports: [KeyResultUpdateService],
})
export class KeyResultUpdateModule {}
