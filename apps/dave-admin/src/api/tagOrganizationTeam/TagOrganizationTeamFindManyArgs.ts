import { TagOrganizationTeamWhereInput } from "./TagOrganizationTeamWhereInput";
import { TagOrganizationTeamOrderByInput } from "./TagOrganizationTeamOrderByInput";

export type TagOrganizationTeamFindManyArgs = {
  where?: TagOrganizationTeamWhereInput;
  orderBy?: Array<TagOrganizationTeamOrderByInput>;
  skip?: number;
  take?: number;
};
