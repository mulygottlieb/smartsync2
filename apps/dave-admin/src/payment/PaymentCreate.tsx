import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { UserTitle } from "../user/UserTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationContactTitle } from "../organizationContact/OrganizationContactTitle";
import { TagPaymentTitle } from "../tagPayment/TagPaymentTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="invoice.id" reference="Invoice" label="Invoice">
          <SelectInput optionText={InvoiceTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationProject.id"
          reference="OrganizationProject"
          label="Organization Project"
        >
          <SelectInput optionText={OrganizationProjectTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <DateTimeInput label="Payment Date" source="paymentDate" />
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Note" source="note" />
        <TextInput label="Currency" source="currency" />
        <BooleanInput label="Overdue" source="overdue" />
        <SelectInput
          source="paymentMethod"
          label="Payment Method"
          choices={[
            { label: "BANK_TRANSFER", value: "BANK_TRANSFER" },
            { label: "CASH", value: "CASH" },
            { label: "CHEQUE", value: "CHEQUE" },
            { label: "CREDIT_CARD", value: "CREDIT_CARD" },
            { label: "DEBIT", value: "DEBIT" },
            { label: "ONLINE", value: "ONLINE" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationContact.id"
          reference="OrganizationContact"
          label="Organization Contact"
        >
          <SelectInput optionText={OrganizationContactTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="tagPayment"
          reference="TagPayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagPaymentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
