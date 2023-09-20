import { OrganizationAwardWhereInput } from "./OrganizationAwardWhereInput";
import { OrganizationAwardOrderByInput } from "./OrganizationAwardOrderByInput";

export type OrganizationAwardFindManyArgs = {
  where?: OrganizationAwardWhereInput;
  orderBy?: Array<OrganizationAwardOrderByInput>;
  skip?: number;
  take?: number;
};
