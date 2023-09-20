import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { CandidateEmploymentType } from "../candidateEmploymentType/CandidateEmploymentType";
import { OrganizationEmploymentTypeEmployee } from "../organizationEmploymentTypeEmployee/OrganizationEmploymentTypeEmployee";
import { TagOrganizationEmploymentType } from "../tagOrganizationEmploymentType/TagOrganizationEmploymentType";

export type OrganizationEmploymentType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
  candidateEmploymentType?: Array<CandidateEmploymentType>;
  organizationEmploymentTypeEmployee?: Array<OrganizationEmploymentTypeEmployee>;
  tagOrganizationEmploymentType?: Array<TagOrganizationEmploymentType>;
};
