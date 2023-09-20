import { OrganizationTeamEmployeeWhereInput } from "./OrganizationTeamEmployeeWhereInput";
import { OrganizationTeamEmployeeOrderByInput } from "./OrganizationTeamEmployeeOrderByInput";

export type OrganizationTeamEmployeeFindManyArgs = {
  where?: OrganizationTeamEmployeeWhereInput;
  orderBy?: Array<OrganizationTeamEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
