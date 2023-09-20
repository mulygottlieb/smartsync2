import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationContactTitle } from "../organizationContact/OrganizationContactTitle";
import { InvoiceEstimateHistoryTitle } from "../invoiceEstimateHistory/InvoiceEstimateHistoryTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { TagInvoiceTitle } from "../tagInvoice/TagInvoiceTitle";

export const InvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Invoice Date" source="invoiceDate" />
        <NumberInput label="Invoice Number" source="invoiceNumber" />
        <DateTimeInput label="Due Date" source="dueDate" />
        <TextInput label="Currency" source="currency" />
        <NumberInput label="Discount Value" source="discountValue" />
        <BooleanInput label="Paid" source="paid" />
        <NumberInput label="Tax" source="tax" />
        <NumberInput label="Tax2" source="tax2" />
        <TextInput label="Terms" source="terms" />
        <NumberInput label="Total Value" source="totalValue" />
        <TextInput label="Status" source="status" />
        <BooleanInput label="Is Estimate" source="isEstimate" />
        <BooleanInput label="Is Accepted" source="isAccepted" />
        <TextInput label="Discount Type" source="discountType" />
        <TextInput label="Tax Type" source="taxType" />
        <TextInput label="Tax2 Type" source="tax2Type" />
        <TextInput label="Invoice Type" source="invoiceType" />
        <TextInput label="Sent To" source="sentTo" />
        <TextInput
          label="Organization Contact Id"
          source="organizationContactId"
        />
        <TextInput label="Internal Note" source="internalNote" />
        <NumberInput label="Already Paid" source="alreadyPaid" />
        <NumberInput label="Amount Due" source="amountDue" />
        <BooleanInput
          label="Has Remaining Amount Invoiced"
          source="hasRemainingAmountInvoiced"
        />
        <TextInput label="Token" source="token" />
        <BooleanInput label="Is Archived" source="isArchived" />
        <ReferenceInput
          source="organizationInvoiceOrganizationIdToorganization.id"
          reference="Organization"
          label="Organization Invoice Organization Id Toorganization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationInvoiceFromOrganizationIdToorganization.id"
          reference="Organization"
          label="Organization Invoice From Organization Id Toorganization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationContact.id"
          reference="OrganizationContact"
          label="Organization Contact"
        >
          <SelectInput optionText={OrganizationContactTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="invoiceEstimateHistory"
          reference="InvoiceEstimateHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceEstimateHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invoiceItem"
          reference="InvoiceItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="payment"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagInvoice"
          reference="TagInvoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagInvoiceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
