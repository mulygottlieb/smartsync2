import { Invoice } from "../invoice/Invoice";
import { OrganizationProject } from "../organizationProject/OrganizationProject";
import { Organization } from "../organization/Organization";
import { Decimal } from "decimal.js";
import { User } from "../user/User";
import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";
import { OrganizationContact } from "../organizationContact/OrganizationContact";
import { TagPayment } from "../tagPayment/TagPayment";

export type Payment = {
  invoice?: Invoice | null;
  organizationProject?: OrganizationProject | null;
  organization?: Organization | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  paymentDate: Date | null;
  amount: Decimal | null;
  note: string | null;
  currency: string;
  overdue: boolean | null;
  paymentMethod?:
    | "BANK_TRANSFER"
    | "CASH"
    | "CHEQUE"
    | "CREDIT_CARD"
    | "DEBIT"
    | "ONLINE"
    | null;
  user?: User;
  employee?: Employee | null;
  tenant?: Tenant | null;
  organizationContact?: OrganizationContact | null;
  tagPayment?: Array<TagPayment>;
};
