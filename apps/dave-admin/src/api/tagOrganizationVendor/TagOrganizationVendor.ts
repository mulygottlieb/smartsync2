import { OrganizationVendor } from "../organizationVendor/OrganizationVendor";
import { Tag } from "../tag/Tag";

export type TagOrganizationVendor = {
  organizationVendor?: OrganizationVendor;
  tag?: Tag;
  id: string;
};
