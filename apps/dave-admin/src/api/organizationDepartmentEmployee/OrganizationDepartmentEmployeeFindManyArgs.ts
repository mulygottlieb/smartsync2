import { OrganizationDepartmentEmployeeWhereInput } from "./OrganizationDepartmentEmployeeWhereInput";
import { OrganizationDepartmentEmployeeOrderByInput } from "./OrganizationDepartmentEmployeeOrderByInput";

export type OrganizationDepartmentEmployeeFindManyArgs = {
  where?: OrganizationDepartmentEmployeeWhereInput;
  orderBy?: Array<OrganizationDepartmentEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
