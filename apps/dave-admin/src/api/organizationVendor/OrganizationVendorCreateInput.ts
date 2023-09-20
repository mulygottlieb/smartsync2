import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ExpenseCreateNestedManyWithoutOrganizationVendorsInput } from "./ExpenseCreateNestedManyWithoutOrganizationVendorsInput";
import { TagOrganizationVendorCreateNestedManyWithoutOrganizationVendorsInput } from "./TagOrganizationVendorCreateNestedManyWithoutOrganizationVendorsInput";

export type OrganizationVendorCreateInput = {
  name: string;
  email?: string | null;
  phone?: string | null;
  website?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  expense?: ExpenseCreateNestedManyWithoutOrganizationVendorsInput;
  tagOrganizationVendor?: TagOrganizationVendorCreateNestedManyWithoutOrganizationVendorsInput;
};
