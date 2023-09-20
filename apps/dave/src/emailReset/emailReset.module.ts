import { Module } from "@nestjs/common";
import { EmailResetModuleBase } from "./base/emailReset.module.base";
import { EmailResetService } from "./emailReset.service";
import { EmailResetController } from "./emailReset.controller";
import { EmailResetResolver } from "./emailReset.resolver";

@Module({
  imports: [EmailResetModuleBase],
  controllers: [EmailResetController],
  providers: [EmailResetService, EmailResetResolver],
  exports: [EmailResetService],
})
export class EmailResetModule {}
