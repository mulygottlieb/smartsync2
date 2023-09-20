import { InviteOrganizationTeamWhereInput } from "./InviteOrganizationTeamWhereInput";
import { InviteOrganizationTeamOrderByInput } from "./InviteOrganizationTeamOrderByInput";

export type InviteOrganizationTeamFindManyArgs = {
  where?: InviteOrganizationTeamWhereInput;
  orderBy?: Array<InviteOrganizationTeamOrderByInput>;
  skip?: number;
  take?: number;
};
