import { Module } from "@nestjs/common";
import { EmailSentModuleBase } from "./base/emailSent.module.base";
import { EmailSentService } from "./emailSent.service";
import { EmailSentController } from "./emailSent.controller";
import { EmailSentResolver } from "./emailSent.resolver";

@Module({
  imports: [EmailSentModuleBase],
  controllers: [EmailSentController],
  providers: [EmailSentService, EmailSentResolver],
  exports: [EmailSentService],
})
export class EmailSentModule {}
