import { OrganizationVendorWhereUniqueInput } from "../organizationVendor/OrganizationVendorWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagOrganizationVendorWhereInput = {
  organizationVendor?: OrganizationVendorWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
