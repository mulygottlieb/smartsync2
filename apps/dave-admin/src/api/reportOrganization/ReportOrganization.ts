import { Organization } from "../organization/Organization";
import { Report } from "../report/Report";
import { Tenant } from "../tenant/Tenant";

export type ReportOrganization = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isEnabled: boolean;
  organization?: Organization | null;
  report?: Report;
  tenant?: Tenant | null;
};
