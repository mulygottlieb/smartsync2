import { Decimal } from "decimal.js";
import { OrganizationContact } from "../organizationContact/OrganizationContact";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { Employee } from "../employee/Employee";
import { TagIncome } from "../tagIncome/TagIncome";

export type Income = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: Decimal;
  currency: string;
  valueDate: Date | null;
  notes: string | null;
  isBonus: boolean | null;
  reference: string | null;
  organizationContact?: OrganizationContact | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  employee?: Employee | null;
  tagIncome?: Array<TagIncome>;
};
