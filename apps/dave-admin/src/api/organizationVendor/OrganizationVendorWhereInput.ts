import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { TagOrganizationVendorListRelationFilter } from "../tagOrganizationVendor/TagOrganizationVendorListRelationFilter";

export type OrganizationVendorWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  website?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  expense?: ExpenseListRelationFilter;
  tagOrganizationVendor?: TagOrganizationVendorListRelationFilter;
};
