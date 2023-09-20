import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { InvoiceEstimateHistoryListRelationFilter } from "../invoiceEstimateHistory/InvoiceEstimateHistoryListRelationFilter";
import { InvoiceItemListRelationFilter } from "../invoiceItem/InvoiceItemListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { TagInvoiceListRelationFilter } from "../tagInvoice/TagInvoiceListRelationFilter";

export type InvoiceWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  invoiceDate?: DateTimeNullableFilter;
  invoiceNumber?: DecimalNullableFilter;
  dueDate?: DateTimeNullableFilter;
  currency?: StringFilter;
  discountValue?: DecimalFilter;
  paid?: BooleanNullableFilter;
  tax?: DecimalNullableFilter;
  tax2?: DecimalNullableFilter;
  terms?: StringFilter;
  totalValue?: DecimalNullableFilter;
  status?: StringFilter;
  isEstimate?: BooleanNullableFilter;
  isAccepted?: BooleanNullableFilter;
  discountType?: StringNullableFilter;
  taxType?: StringNullableFilter;
  tax2Type?: StringNullableFilter;
  invoiceType?: StringNullableFilter;
  sentTo?: StringNullableFilter;
  organizationContactId?: StringNullableFilter;
  internalNote?: StringNullableFilter;
  alreadyPaid?: DecimalNullableFilter;
  amountDue?: DecimalNullableFilter;
  hasRemainingAmountInvoiced?: BooleanNullableFilter;
  token?: StringNullableFilter;
  isArchived?: BooleanNullableFilter;
  organizationInvoiceOrganizationIdToorganization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organizationInvoiceFromOrganizationIdToorganization?: OrganizationWhereUniqueInput;
  organizationContact?: OrganizationContactWhereUniqueInput;
  invoiceEstimateHistory?: InvoiceEstimateHistoryListRelationFilter;
  invoiceItem?: InvoiceItemListRelationFilter;
  payment?: PaymentListRelationFilter;
  tagInvoice?: TagInvoiceListRelationFilter;
};