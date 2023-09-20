import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OrganizationProjectEmployeeWhereInput = {
  organizationProject?: OrganizationProjectWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
};
