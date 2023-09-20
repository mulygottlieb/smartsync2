import { TimeOffPolicyEmployeeWhereInput } from "./TimeOffPolicyEmployeeWhereInput";
import { TimeOffPolicyEmployeeOrderByInput } from "./TimeOffPolicyEmployeeOrderByInput";

export type TimeOffPolicyEmployeeFindManyArgs = {
  where?: TimeOffPolicyEmployeeWhereInput;
  orderBy?: Array<TimeOffPolicyEmployeeOrderByInput>;
  skip?: number;
  take?: number;
};
