import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type OrganizationAward = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  year: string;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
