import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TimeSlotMinuteCreateInput = {
  keyboard: number;
  mouse: number;
  datetime: Date;
  organization?: OrganizationWhereUniqueInput | null;
  timeSlot: TimeSlotWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
};
