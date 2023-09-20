import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { TagEmployeeLevel } from "../tagEmployeeLevel/TagEmployeeLevel";

export type EmployeeLevel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  level: string;
  organization?: Organization | null;
  tenant?: Tenant | null;
  tagEmployeeLevel?: Array<TagEmployeeLevel>;
};
