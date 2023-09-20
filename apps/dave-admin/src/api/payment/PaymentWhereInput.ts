import { InvoiceWhereUniqueInput } from "../invoice/InvoiceWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { TagPaymentListRelationFilter } from "../tagPayment/TagPaymentListRelationFilter";

export type PaymentWhereInput = {
  invoice?: InvoiceWhereUniqueInput;
  organizationProject?: OrganizationProjectWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  paymentDate?: DateTimeNullableFilter;
  amount?: DecimalNullableFilter;
  note?: StringNullableFilter;
  currency?: StringFilter;
  overdue?: BooleanNullableFilter;
  paymentMethod?:
    | "BANK_TRANSFER"
    | "CASH"
    | "CHEQUE"
    | "CREDIT_CARD"
    | "DEBIT"
    | "ONLINE";
  user?: UserWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organizationContact?: OrganizationContactWhereUniqueInput;
  tagPayment?: TagPaymentListRelationFilter;
};
