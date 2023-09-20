import { OrganizationProjectWhereInput } from "./OrganizationProjectWhereInput";
import { OrganizationProjectOrderByInput } from "./OrganizationProjectOrderByInput";

export type OrganizationProjectFindManyArgs = {
  where?: OrganizationProjectWhereInput;
  orderBy?: Array<OrganizationProjectOrderByInput>;
  skip?: number;
  take?: number;
};
