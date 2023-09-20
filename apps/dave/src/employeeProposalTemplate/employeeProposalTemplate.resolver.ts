import * as graphql from "@nestjs/graphql";
import { EmployeeProposalTemplateResolverBase } from "./base/employeeProposalTemplate.resolver.base";
import { EmployeeProposalTemplate } from "./base/EmployeeProposalTemplate";
import { EmployeeProposalTemplateService } from "./employeeProposalTemplate.service";

@graphql.Resolver(() => EmployeeProposalTemplate)
export class EmployeeProposalTemplateResolver extends EmployeeProposalTemplateResolverBase {
  constructor(protected readonly service: EmployeeProposalTemplateService) {
    super(service);
  }
}
