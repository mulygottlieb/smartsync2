import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";

export type InviteOrganizationProjectUpdateInput = {
  invite?: InviteWhereUniqueInput;
  organizationProject?: OrganizationProjectWhereUniqueInput;
};
