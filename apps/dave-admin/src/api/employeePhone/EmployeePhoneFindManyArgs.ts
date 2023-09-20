import { EmployeePhoneWhereInput } from "./EmployeePhoneWhereInput";
import { EmployeePhoneOrderByInput } from "./EmployeePhoneOrderByInput";

export type EmployeePhoneFindManyArgs = {
  where?: EmployeePhoneWhereInput;
  orderBy?: Array<EmployeePhoneOrderByInput>;
  skip?: number;
  take?: number;
};
