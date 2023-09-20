import { EmployeeAwardWhereInput } from "./EmployeeAwardWhereInput";
import { EmployeeAwardOrderByInput } from "./EmployeeAwardOrderByInput";

export type EmployeeAwardFindManyArgs = {
  where?: EmployeeAwardWhereInput;
  orderBy?: Array<EmployeeAwardOrderByInput>;
  skip?: number;
  take?: number;
};
