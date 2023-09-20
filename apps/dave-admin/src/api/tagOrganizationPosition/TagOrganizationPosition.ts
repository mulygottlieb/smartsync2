import { OrganizationPosition } from "../organizationPosition/OrganizationPosition";
import { Tag } from "../tag/Tag";

export type TagOrganizationPosition = {
  organizationPosition?: OrganizationPosition;
  tag?: Tag;
  id: string;
};
