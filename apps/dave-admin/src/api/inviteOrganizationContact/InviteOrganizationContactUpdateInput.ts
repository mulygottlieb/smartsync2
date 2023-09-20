import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";

export type InviteOrganizationContactUpdateInput = {
  invite?: InviteWhereUniqueInput;
  organizationContact?: OrganizationContactWhereUniqueInput;
};
