import { Invite } from "../invite/Invite";
import { OrganizationContact } from "../organizationContact/OrganizationContact";

export type InviteOrganizationContact = {
  invite?: Invite;
  organizationContact?: OrganizationContact;
  id: string;
};
