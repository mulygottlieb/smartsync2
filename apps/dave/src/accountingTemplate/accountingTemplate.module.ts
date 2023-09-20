import { Module } from "@nestjs/common";
import { AccountingTemplateModuleBase } from "./base/accountingTemplate.module.base";
import { AccountingTemplateService } from "./accountingTemplate.service";
import { AccountingTemplateController } from "./accountingTemplate.controller";
import { AccountingTemplateResolver } from "./accountingTemplate.resolver";

@Module({
  imports: [AccountingTemplateModuleBase],
  controllers: [AccountingTemplateController],
  providers: [AccountingTemplateService, AccountingTemplateResolver],
  exports: [AccountingTemplateService],
})
export class AccountingTemplateModule {}
