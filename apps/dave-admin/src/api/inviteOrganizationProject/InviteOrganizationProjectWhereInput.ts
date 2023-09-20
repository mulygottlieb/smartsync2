import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type InviteOrganizationProjectWhereInput = {
  invite?: InviteWhereUniqueInput;
  organizationProject?: OrganizationProjectWhereUniqueInput;
  id?: StringFilter;
};
