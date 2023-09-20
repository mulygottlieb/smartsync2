import { Tag } from "../tag/Tag";
import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";

export type TagOrganizationTeam = {
  tag?: Tag;
  organizationTeam?: OrganizationTeam;
  id: string;
};
