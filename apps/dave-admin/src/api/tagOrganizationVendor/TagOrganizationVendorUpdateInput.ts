import { OrganizationVendorWhereUniqueInput } from "../organizationVendor/OrganizationVendorWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationVendorUpdateInput = {
  organizationVendor?: OrganizationVendorWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
