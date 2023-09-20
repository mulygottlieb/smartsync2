import { OrganizationDepartmentWhereInput } from "./OrganizationDepartmentWhereInput";
import { OrganizationDepartmentOrderByInput } from "./OrganizationDepartmentOrderByInput";

export type OrganizationDepartmentFindManyArgs = {
  where?: OrganizationDepartmentWhereInput;
  orderBy?: Array<OrganizationDepartmentOrderByInput>;
  skip?: number;
  take?: number;
};
