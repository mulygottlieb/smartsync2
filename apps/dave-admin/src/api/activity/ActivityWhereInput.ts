import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ActivityWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  metaData?: JsonFilter;
  date?: DateTimeFilter;
  time?: DateTimeFilter;
  duration?: IntFilter;
  typeField?: StringNullableFilter;
  source?: StringFilter;
  deletedAt?: DateTimeNullableFilter;
  recordedAt?: DateTimeNullableFilter;
  task?: TaskWhereUniqueInput;
  timeSlot?: TimeSlotWhereUniqueInput;
  organizationProject?: OrganizationProjectWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};