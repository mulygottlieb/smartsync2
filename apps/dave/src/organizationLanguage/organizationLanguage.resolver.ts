import * as graphql from "@nestjs/graphql";
import { OrganizationLanguageResolverBase } from "./base/organizationLanguage.resolver.base";
import { OrganizationLanguage } from "./base/OrganizationLanguage";
import { OrganizationLanguageService } from "./organizationLanguage.service";

@graphql.Resolver(() => OrganizationLanguage)
export class OrganizationLanguageResolver extends OrganizationLanguageResolverBase {
  constructor(protected readonly service: OrganizationLanguageService) {
    super(service);
  }
}
