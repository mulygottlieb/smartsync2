import { Decimal } from "decimal.js";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { ExpenseWhereUniqueInput } from "../expense/ExpenseWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type InvoiceItemUpdateInput = {
  description?: string | null;
  price?: Decimal;
  quantity?: Decimal;
  totalValue?: Decimal;
  applyTax?: boolean | null;
  applyDiscount?: boolean | null;
  organizationProject?: OrganizationProjectWhereUniqueInput | null;
  invoice?: InvoiceWhereUniqueInput | null;
  task?: TaskWhereUniqueInput | null;
  expense?: ExpenseWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
