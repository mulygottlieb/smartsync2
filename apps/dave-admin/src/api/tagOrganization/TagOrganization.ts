import { Organization } from "../organization/Organization";
import { Tag } from "../tag/Tag";

export type TagOrganization = {
  organization?: Organization;
  tag?: Tag;
  id: string;
};
