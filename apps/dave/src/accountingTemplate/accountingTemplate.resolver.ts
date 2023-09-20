import * as graphql from "@nestjs/graphql";
import { AccountingTemplateResolverBase } from "./base/accountingTemplate.resolver.base";
import { AccountingTemplate } from "./base/AccountingTemplate";
import { AccountingTemplateService } from "./accountingTemplate.service";

@graphql.Resolver(() => AccountingTemplate)
export class AccountingTemplateResolver extends AccountingTemplateResolverBase {
  constructor(protected readonly service: AccountingTemplateService) {
    super(service);
  }
}
