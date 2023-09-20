import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ExpenseUpdateManyWithoutOrganizationVendorsInput } from "./ExpenseUpdateManyWithoutOrganizationVendorsInput";
import { TagOrganizationVendorUpdateManyWithoutOrganizationVendorsInput } from "./TagOrganizationVendorUpdateManyWithoutOrganizationVendorsInput";

export type OrganizationVendorUpdateInput = {
  name?: string;
  email?: string | null;
  phone?: string | null;
  website?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  expense?: ExpenseUpdateManyWithoutOrganizationVendorsInput;
  tagOrganizationVendor?: TagOrganizationVendorUpdateManyWithoutOrganizationVendorsInput;
};
