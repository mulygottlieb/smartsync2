import { Invite } from "../invite/Invite";
import { OrganizationDepartment } from "../organizationDepartment/OrganizationDepartment";

export type InviteOrganizationDepartment = {
  invite?: Invite;
  organizationDepartment?: OrganizationDepartment;
  id: string;
};
