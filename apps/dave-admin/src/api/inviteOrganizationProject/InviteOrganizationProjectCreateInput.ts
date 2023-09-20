import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";

export type InviteOrganizationProjectCreateInput = {
  invite: InviteWhereUniqueInput;
  organizationProject: OrganizationProjectWhereUniqueInput;
};
