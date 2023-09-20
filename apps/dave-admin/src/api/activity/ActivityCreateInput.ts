import { InputJsonValue } from "../../types";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ActivityCreateInput = {
  title?: string | null;
  description?: string | null;
  metaData?: InputJsonValue;
  duration: number;
  typeField?: string | null;
  source: string;
  deletedAt?: Date | null;
  recordedAt?: Date | null;
  task?: TaskWhereUniqueInput | null;
  timeSlot?: TimeSlotWhereUniqueInput | null;
  organizationProject?: OrganizationProjectWhereUniqueInput | null;
  employee: EmployeeWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
