import { EmployeeSettingWhereInput } from "./EmployeeSettingWhereInput";
import { EmployeeSettingOrderByInput } from "./EmployeeSettingOrderByInput";

export type EmployeeSettingFindManyArgs = {
  where?: EmployeeSettingWhereInput;
  orderBy?: Array<EmployeeSettingOrderByInput>;
  skip?: number;
  take?: number;
};
