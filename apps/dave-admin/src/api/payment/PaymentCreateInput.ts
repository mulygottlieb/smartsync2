import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { TagPaymentCreateNestedManyWithoutPaymentsInput } from "./TagPaymentCreateNestedManyWithoutPaymentsInput";

export type PaymentCreateInput = {
  invoice?: InvoiceWhereUniqueInput | null;
  organizationProject?: OrganizationProjectWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  paymentDate?: Date | null;
  amount?: Decimal | null;
  note?: string | null;
  currency: string;
  overdue?: boolean | null;
  paymentMethod?:
    | "BANK_TRANSFER"
    | "CASH"
    | "CHEQUE"
    | "CREDIT_CARD"
    | "DEBIT"
    | "ONLINE"
    | null;
  user: UserWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organizationContact?: OrganizationContactWhereUniqueInput | null;
  tagPayment?: TagPaymentCreateNestedManyWithoutPaymentsInput;
};
