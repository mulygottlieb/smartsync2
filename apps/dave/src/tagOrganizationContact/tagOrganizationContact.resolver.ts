import * as graphql from "@nestjs/graphql";
import { TagOrganizationContactResolverBase } from "./base/tagOrganizationContact.resolver.base";
import { TagOrganizationContact } from "./base/TagOrganizationContact";
import { TagOrganizationContactService } from "./tagOrganizationContact.service";

@graphql.Resolver(() => TagOrganizationContact)
export class TagOrganizationContactResolver extends TagOrganizationContactResolverBase {
  constructor(protected readonly service: TagOrganizationContactService) {
    super(service);
  }
}
