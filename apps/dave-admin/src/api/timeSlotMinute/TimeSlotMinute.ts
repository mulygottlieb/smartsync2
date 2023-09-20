import { Organization } from "../organization/Organization";
import { TimeSlot } from "../timeSlot/TimeSlot";
import { Tenant } from "../tenant/Tenant";

export type TimeSlotMinute = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  keyboard: number;
  mouse: number;
  datetime: Date;
  organization?: Organization | null;
  timeSlot?: TimeSlot;
  tenant?: Tenant | null;
};
