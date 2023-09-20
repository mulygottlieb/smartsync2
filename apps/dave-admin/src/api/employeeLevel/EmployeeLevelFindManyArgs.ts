import { EmployeeLevelWhereInput } from "./EmployeeLevelWhereInput";
import { EmployeeLevelOrderByInput } from "./EmployeeLevelOrderByInput";

export type EmployeeLevelFindManyArgs = {
  where?: EmployeeLevelWhereInput;
  orderBy?: Array<EmployeeLevelOrderByInput>;
  skip?: number;
  take?: number;
};
