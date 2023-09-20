import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TimeSlotMinuteWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  keyboard?: IntFilter;
  mouse?: IntFilter;
  datetime?: DateTimeFilter;
  organization?: OrganizationWhereUniqueInput;
  timeSlot?: TimeSlotWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
