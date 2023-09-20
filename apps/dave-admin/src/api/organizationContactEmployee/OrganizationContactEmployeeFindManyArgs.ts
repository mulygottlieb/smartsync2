import { OrganizationContactEmployeeWhereInput } from "./OrganizationContactEmployeeWhereInput";
import { OrganizationContactEmployeeOrderByInput } from "./OrganizationContactEmployeeOrderByInput";

export type OrganizationContactEmployeeFindManyArgs = {
  where?: OrganizationContactEmployeeWhereInput;
  orderBy?: Array<OrganizationContactEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
