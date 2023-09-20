import { Decimal } from "decimal.js";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { ExpenseCategoryWhereUniqueInput } from "../expenseCategory/ExpenseCategoryWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationVendorWhereUniqueInput } from "../organizationVendor/OrganizationVendorWhereUniqueInput";
import { InvoiceItemUpdateManyWithoutExpensesInput } from "./InvoiceItemUpdateManyWithoutExpensesInput";
import { TagExpenseUpdateManyWithoutExpensesInput } from "./TagExpenseUpdateManyWithoutExpensesInput";

export type ExpenseUpdateInput = {
  amount?: Decimal;
  typeOfExpense?: string | null;
  notes?: string | null;
  currency?: string;
  valueDate?: Date | null;
  purpose?: string | null;
  taxType?: string | null;
  taxLabel?: string | null;
  rateValue?: Decimal | null;
  receipt?: string | null;
  splitExpense?: boolean | null;
  reference?: string | null;
  status?: "INVOICED" | "UNINVOICED" | "PAID" | "NOT_BILLABLE" | null;
  organizationContact?: OrganizationContactWhereUniqueInput | null;
  expenseCategory?: ExpenseCategoryWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organizationProject?: OrganizationProjectWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  organizationVendor?: OrganizationVendorWhereUniqueInput | null;
  invoiceItem?: InvoiceItemUpdateManyWithoutExpensesInput;
  tagExpense?: TagExpenseUpdateManyWithoutExpensesInput;
};