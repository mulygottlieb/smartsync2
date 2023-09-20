import { Invite } from "../invite/Invite";
import { OrganizationProject } from "../organizationProject/OrganizationProject";

export type InviteOrganizationProject = {
  invite?: Invite;
  organizationProject?: OrganizationProject;
  id: string;
};
