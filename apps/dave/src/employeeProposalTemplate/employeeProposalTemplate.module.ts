import { Module } from "@nestjs/common";
import { EmployeeProposalTemplateModuleBase } from "./base/employeeProposalTemplate.module.base";
import { EmployeeProposalTemplateService } from "./employeeProposalTemplate.service";
import { EmployeeProposalTemplateController } from "./employeeProposalTemplate.controller";
import { EmployeeProposalTemplateResolver } from "./employeeProposalTemplate.resolver";

@Module({
  imports: [EmployeeProposalTemplateModuleBase],
  controllers: [EmployeeProposalTemplateController],
  providers: [
    EmployeeProposalTemplateService,
    EmployeeProposalTemplateResolver,
  ],
  exports: [EmployeeProposalTemplateService],
})
export class EmployeeProposalTemplateModule {}
