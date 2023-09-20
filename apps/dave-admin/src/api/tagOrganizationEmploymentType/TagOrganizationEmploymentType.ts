import { OrganizationEmploymentType } from "../organizationEmploymentType/OrganizationEmploymentType";
import { Tag } from "../tag/Tag";

export type TagOrganizationEmploymentType = {
  organizationEmploymentType?: OrganizationEmploymentType;
  tag?: Tag;
  id: string;
};
