import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";

export const InvoiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Invoices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Invoice Date" source="invoiceDate" />
        <TextField label="Invoice Number" source="invoiceNumber" />
        <TextField label="Due Date" source="dueDate" />
        <TextField label="Currency" source="currency" />
        <TextField label="Discount Value" source="discountValue" />
        <BooleanField label="Paid" source="paid" />
        <TextField label="Tax" source="tax" />
        <TextField label="Tax2" source="tax2" />
        <TextField label="Terms" source="terms" />
        <TextField label="Total Value" source="totalValue" />
        <TextField label="Status" source="status" />
        <BooleanField label="Is Estimate" source="isEstimate" />
        <BooleanField label="Is Accepted" source="isAccepted" />
        <TextField label="Discount Type" source="discountType" />
        <TextField label="Tax Type" source="taxType" />
        <TextField label="Tax2 Type" source="tax2Type" />
        <TextField label="Invoice Type" source="invoiceType" />
        <TextField label="Sent To" source="sentTo" />
        <TextField
          label="Organization Contact Id"
          source="organizationContactId"
        />
        <TextField label="Internal Note" source="internalNote" />
        <TextField label="Already Paid" source="alreadyPaid" />
        <TextField label="Amount Due" source="amountDue" />
        <BooleanField
          label="Has Remaining Amount Invoiced"
          source="hasRemainingAmountInvoiced"
        />
        <TextField label="Token" source="token" />
        <BooleanField label="Is Archived" source="isArchived" />
        <ReferenceField
          label="Organization Invoice Organization Id Toorganization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Invoice From Organization Id Toorganization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Contact"
          source="organizationcontact.id"
          reference="OrganizationContact"
        >
          <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
