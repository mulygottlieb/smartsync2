import { Tag } from "../tag/Tag";
import { OrganizationDepartment } from "../organizationDepartment/OrganizationDepartment";

export type TagOrganizationDepartment = {
  tag?: Tag;
  organizationDepartment?: OrganizationDepartment;
  id: string;
};
