import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { Expense } from "../expense/Expense";
import { TagOrganizationVendor } from "../tagOrganizationVendor/TagOrganizationVendor";

export type OrganizationVendor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string | null;
  phone: string | null;
  website: string | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  expense?: Array<Expense>;
  tagOrganizationVendor?: Array<TagOrganizationVendor>;
};
