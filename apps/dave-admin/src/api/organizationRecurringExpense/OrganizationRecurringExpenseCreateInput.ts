import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type OrganizationRecurringExpenseCreateInput = {
  startDay: number;
  startMonth: number;
  startYear: number;
  startDate: Date;
  endDay?: number | null;
  endMonth?: number | null;
  endYear?: number | null;
  endDate?: Date | null;
  categoryName: string;
  value: Decimal;
  currency: string;
  splitExpense?: boolean | null;
  parentRecurringExpenseId?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
