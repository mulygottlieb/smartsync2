import { Decimal } from "decimal.js";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type OrganizationRecurringExpense = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDay: number;
  startMonth: number;
  startYear: number;
  startDate: Date;
  endDay: number | null;
  endMonth: number | null;
  endYear: number | null;
  endDate: Date | null;
  categoryName: string;
  value: Decimal;
  currency: string;
  splitExpense: boolean | null;
  parentRecurringExpenseId: string | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
