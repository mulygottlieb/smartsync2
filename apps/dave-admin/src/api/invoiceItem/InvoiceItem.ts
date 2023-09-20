import { Decimal } from "decimal.js";
import { OrganizationProject } from "../organizationProject/OrganizationProject";
import { Invoice } from "../invoice/Invoice";
import { Task } from "../task/Task";
import { Expense } from "../expense/Expense";
import { Employee } from "../employee/Employee";
import { Product } from "../product/Product";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type InvoiceItem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  price: Decimal;
  quantity: Decimal;
  totalValue: Decimal;
  applyTax: boolean | null;
  applyDiscount: boolean | null;
  organizationProject?: OrganizationProject | null;
  invoice?: Invoice | null;
  task?: Task | null;
  expense?: Expense | null;
  employee?: Employee | null;
  product?: Product | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
