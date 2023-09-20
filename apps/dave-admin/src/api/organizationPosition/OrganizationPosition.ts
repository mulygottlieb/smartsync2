import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { Candidate } from "../candidate/Candidate";
import { Employee } from "../employee/Employee";
import { TagOrganizationPosition } from "../tagOrganizationPosition/TagOrganizationPosition";

export type OrganizationPosition = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  organization?: Organization | null;
  tenant?: Tenant | null;
  candidate?: Array<Candidate>;
  employee?: Array<Employee>;
  tagOrganizationPosition?: Array<TagOrganizationPosition>;
};
