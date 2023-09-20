import { Employee } from "../employee/Employee";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type AvailabilitySlot = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date;
  endTime: Date;
  allDay: boolean;
  typeField: string | null;
  employee?: Employee | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
