import { Invoice } from "../invoice/Invoice";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { User } from "../user/User";

export type InvoiceEstimateHistory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  action: string;
  invoice?: Invoice;
  organization?: Organization | null;
  tenant?: Tenant | null;
  user?: User | null;
};
