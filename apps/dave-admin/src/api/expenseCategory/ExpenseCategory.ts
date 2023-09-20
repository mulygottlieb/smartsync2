import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { Expense } from "../expense/Expense";
import { TagOrganizationExpenseCategory } from "../tagOrganizationExpenseCategory/TagOrganizationExpenseCategory";

export type ExpenseCategory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
  expense?: Array<Expense>;
  tagOrganizationExpenseCategory?: Array<TagOrganizationExpenseCategory>;
};
