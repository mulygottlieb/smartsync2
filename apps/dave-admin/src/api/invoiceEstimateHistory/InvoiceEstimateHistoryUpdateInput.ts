import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvoiceEstimateHistoryUpdateInput = {
  action?: string;
  invoice?: InvoiceWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
