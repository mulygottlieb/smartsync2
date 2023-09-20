import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";

export type InviteOrganizationContactCreateInput = {
  invite: InviteWhereUniqueInput;
  organizationContact: OrganizationContactWhereUniqueInput;
};
