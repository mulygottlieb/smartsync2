import { OrganizationContact } from "../organizationContact/OrganizationContact";
import { Tag } from "../tag/Tag";

export type TagOrganizationContact = {
  organizationContact?: OrganizationContact;
  tag?: Tag;
  id: string;
};
