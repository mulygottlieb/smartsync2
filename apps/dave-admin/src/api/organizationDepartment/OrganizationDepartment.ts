import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { CandidateDepartment } from "../candidateDepartment/CandidateDepartment";
import { InviteOrganizationDepartment } from "../inviteOrganizationDepartment/InviteOrganizationDepartment";
import { OrganizationDepartmentEmployee } from "../organizationDepartmentEmployee/OrganizationDepartmentEmployee";
import { TagOrganizationDepartment } from "../tagOrganizationDepartment/TagOrganizationDepartment";

export type OrganizationDepartment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
  candidateDepartment?: Array<CandidateDepartment>;
  inviteOrganizationDepartment?: Array<InviteOrganizationDepartment>;
  organizationDepartmentEmployee?: Array<OrganizationDepartmentEmployee>;
  tagOrganizationDepartment?: Array<TagOrganizationDepartment>;
};
