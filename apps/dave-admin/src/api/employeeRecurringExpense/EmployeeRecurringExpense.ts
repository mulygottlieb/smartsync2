import { Decimal } from "decimal.js";
import { Employee } from "../employee/Employee";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type EmployeeRecurringExpense = {
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
  parentRecurringExpenseId: string | null;
  employee?: Employee | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
