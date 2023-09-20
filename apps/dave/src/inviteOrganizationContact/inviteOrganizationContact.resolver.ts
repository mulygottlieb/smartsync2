import * as graphql from "@nestjs/graphql";
import { InviteOrganizationContactResolverBase } from "./base/inviteOrganizationContact.resolver.base";
import { InviteOrganizationContact } from "./base/InviteOrganizationContact";
import { InviteOrganizationContactService } from "./inviteOrganizationContact.service";

@graphql.Resolver(() => InviteOrganizationContact)
export class InviteOrganizationContactResolver extends InviteOrganizationContactResolverBase {
  constructor(protected readonly service: InviteOrganizationContactService) {
    super(service);
  }
}
