import { KeyResultWhereUniqueInput } from "../keyResult/KeyResultWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type KeyResultUpdateUpdateInput = {
  update?: number;
  progress?: number;
  owner?: string;
  status?: string;
  keyResult?: KeyResultWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
