import { Module } from "@nestjs/common";
import { CustomSmtpModuleBase } from "./base/customSmtp.module.base";
import { CustomSmtpService } from "./customSmtp.service";
import { CustomSmtpController } from "./customSmtp.controller";
import { CustomSmtpResolver } from "./customSmtp.resolver";

@Module({
  imports: [CustomSmtpModuleBase],
  controllers: [CustomSmtpController],
  providers: [CustomSmtpService, CustomSmtpResolver],
  exports: [CustomSmtpService],
})
export class CustomSmtpModule {}
