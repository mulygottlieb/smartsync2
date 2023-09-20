import { TimeOffPolicyWhereInput } from "./TimeOffPolicyWhereInput";
import { TimeOffPolicyOrderByInput } from "./TimeOffPolicyOrderByInput";

export type TimeOffPolicyFindManyArgs = {
  where?: TimeOffPolicyWhereInput;
  orderBy?: Array<TimeOffPolicyOrderByInput>;
  skip?: number;
  take?: number;
};
