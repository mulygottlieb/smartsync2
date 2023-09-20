import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TimeLogUpdateManyWithoutTimesheetsInput } from "./TimeLogUpdateManyWithoutTimesheetsInput";

export type TimesheetUpdateInput = {
  duration?: number;
  keyboard?: number;
  mouse?: number;
  overall?: number;
  startedAt?: Date | null;
  stoppedAt?: Date | null;
  approvedAt?: Date | null;
  submittedAt?: Date | null;
  lockedAt?: Date | null;
  isBilled?: boolean;
  status?: string;
  deletedAt?: Date | null;
  tenant?: TenantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput | null;
  timeLog?: TimeLogUpdateManyWithoutTimesheetsInput;
};
