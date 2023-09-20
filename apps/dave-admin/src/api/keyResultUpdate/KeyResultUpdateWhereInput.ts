import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { KeyResultWhereUniqueInput } from "../keyResult/KeyResultWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type KeyResultUpdateWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  update?: IntFilter;
  progress?: IntFilter;
  owner?: StringFilter;
  status?: StringFilter;
  keyResult?: KeyResultWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
