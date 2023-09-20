import { JobPreset } from "../jobPreset/JobPreset";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { JobSearchOccupation } from "../jobSearchOccupation/JobSearchOccupation";
import { Employee } from "../employee/Employee";
import { JobSearchCategory } from "../jobSearchCategory/JobSearchCategory";

export type EmployeeUpworkJobSearchCriterion = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  keyword: string | null;
  jobType: string | null;
  jobPreset?: JobPreset | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  jobSearchOccupation?: JobSearchOccupation | null;
  employee?: Employee;
  jobSearchCategory?: JobSearchCategory | null;
};
