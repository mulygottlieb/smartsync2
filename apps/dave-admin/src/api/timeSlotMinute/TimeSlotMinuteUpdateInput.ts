import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type TimeSlotMinuteUpdateInput = {
  keyboard?: number;
  mouse?: number;
  datetime?: Date;
  organization?: OrganizationWhereUniqueInput | null;
  timeSlot?: TimeSlotWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
};
