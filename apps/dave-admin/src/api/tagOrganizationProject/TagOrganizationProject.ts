import { Tag } from "../tag/Tag";
import { OrganizationProject } from "../organizationProject/OrganizationProject";

export type TagOrganizationProject = {
  tag?: Tag;
  organizationProject?: OrganizationProject;
  id: string;
};
