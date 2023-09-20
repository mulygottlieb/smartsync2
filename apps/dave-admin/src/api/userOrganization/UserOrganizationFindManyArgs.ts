import { UserOrganizationWhereInput } from "./UserOrganizationWhereInput";
import { UserOrganizationOrderByInput } from "./UserOrganizationOrderByInput";

export type UserOrganizationFindManyArgs = {
  where?: UserOrganizationWhereInput;
  orderBy?: Array<UserOrganizationOrderByInput>;
  skip?: number;
  take?: number;
};
