import { Decimal } from "decimal.js";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeRecurringExpenseCreateInput = {
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
  parentRecurringExpenseId?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
