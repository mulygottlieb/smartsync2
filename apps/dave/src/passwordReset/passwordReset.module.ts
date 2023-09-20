import { Module } from "@nestjs/common";
import { PasswordResetModuleBase } from "./base/passwordReset.module.base";
import { PasswordResetService } from "./passwordReset.service";
import { PasswordResetController } from "./passwordReset.controller";
import { PasswordResetResolver } from "./passwordReset.resolver";

@Module({
  imports: [PasswordResetModuleBase],
  controllers: [PasswordResetController],
  providers: [PasswordResetService, PasswordResetResolver],
  exports: [PasswordResetService],
})
export class PasswordResetModule {}
