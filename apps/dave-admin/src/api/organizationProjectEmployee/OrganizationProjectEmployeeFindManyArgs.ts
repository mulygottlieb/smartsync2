import { OrganizationProjectEmployeeWhereInput } from "./OrganizationProjectEmployeeWhereInput";
import { OrganizationProjectEmployeeOrderByInput } from "./OrganizationProjectEmployeeOrderByInput";

export type OrganizationProjectEmployeeFindManyArgs = {
  where?: OrganizationProjectEmployeeWhereInput;
  orderBy?: Array<OrganizationProjectEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
