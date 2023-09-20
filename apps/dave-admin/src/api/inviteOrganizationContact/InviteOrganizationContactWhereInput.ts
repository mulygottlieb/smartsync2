import { InviteWhereUniqueInput } from "../invite/InviteWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type InviteOrganizationContactWhereInput = {
  invite?: InviteWhereUniqueInput;
  organizationContact?: OrganizationContactWhereUniqueInput;
  id?: StringFilter;
};
