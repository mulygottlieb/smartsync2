import * as graphql from "@nestjs/graphql";
import { ReportOrganizationResolverBase } from "./base/reportOrganization.resolver.base";
import { ReportOrganization } from "./base/ReportOrganization";
import { ReportOrganizationService } from "./reportOrganization.service";

@graphql.Resolver(() => ReportOrganization)
export class ReportOrganizationResolver extends ReportOrganizationResolverBase {
  constructor(protected readonly service: ReportOrganizationService) {
    super(service);
  }
}
