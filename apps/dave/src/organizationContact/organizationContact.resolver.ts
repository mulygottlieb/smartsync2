import * as graphql from "@nestjs/graphql";
import { OrganizationContactResolverBase } from "./base/organizationContact.resolver.base";
import { OrganizationContact } from "./base/OrganizationContact";
import { OrganizationContactService } from "./organizationContact.service";

@graphql.Resolver(() => OrganizationContact)
export class OrganizationContactResolver extends OrganizationContactResolverBase {
  constructor(protected readonly service: OrganizationContactService) {
    super(service);
  }
}
