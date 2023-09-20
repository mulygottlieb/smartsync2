import { TagEventType } from "../tagEventType/TagEventType";
import { Decimal } from "decimal.js";
import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type EventType = {
  tagEventType?: Array<TagEventType>;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  duration: Decimal;
  durationUnit: string | null;
  title: string | null;
  description: string | null;
  isActive: boolean | null;
  employee?: Employee | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
