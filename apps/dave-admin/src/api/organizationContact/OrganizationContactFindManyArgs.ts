import { OrganizationContactWhereInput } from "./OrganizationContactWhereInput";
import { OrganizationContactOrderByInput } from "./OrganizationContactOrderByInput";

export type OrganizationContactFindManyArgs = {
  where?: OrganizationContactWhereInput;
  orderBy?: Array<OrganizationContactOrderByInput>;
  skip?: number;
  take?: number;
};
