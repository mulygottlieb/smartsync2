import { OrganizationTeamWhereInput } from "./OrganizationTeamWhereInput";
import { OrganizationTeamOrderByInput } from "./OrganizationTeamOrderByInput";

export type OrganizationTeamFindManyArgs = {
  where?: OrganizationTeamWhereInput;
  orderBy?: Array<OrganizationTeamOrderByInput>;
  skip?: number;
  take?: number;
};
