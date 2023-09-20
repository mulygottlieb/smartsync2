import { OrganizationVendorWhereUniqueInput } from "../organizationVendor/OrganizationVendorWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationVendorCreateInput = {
  organizationVendor: OrganizationVendorWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
