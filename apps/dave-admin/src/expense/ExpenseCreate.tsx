import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationContactTitle } from "../organizationContact/OrganizationContactTitle";
import { ExpenseCategoryTitle } from "../expenseCategory/ExpenseCategoryTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { OrganizationVendorTitle } from "../organizationVendor/OrganizationVendorTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";
import { TagExpenseTitle } from "../tagExpense/TagExpenseTitle";

export const ExpenseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Type Of Expense" source="typeOfExpense" />
        <TextInput label="Notes" source="notes" />
        <TextInput label="Currency" source="currency" />
        <DateTimeInput label="Value Date" source="valueDate" />
        <TextInput label="Purpose" source="purpose" />
        <TextInput label="Tax Type" source="taxType" />
        <TextInput label="Tax Label" source="taxLabel" />
        <NumberInput label="Rate Value" source="rateValue" />
        <TextInput label="Receipt" source="receipt" />
        <BooleanInput label="Split Expense" source="splitExpense" />
        <TextInput label="Reference" source="reference" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "INVOICED", value: "INVOICED" },
            { label: "UNINVOICED", value: "UNINVOICED" },
            { label: "PAID", value: "PAID" },
            { label: "NOT_BILLABLE", value: "NOT_BILLABLE" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="organizationContact.id"
          reference="OrganizationContact"
          label="Organization Contact"
        >
          <SelectInput optionText={OrganizationContactTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="expenseCategory.id"
          reference="ExpenseCategory"
          label="Expense Category"
        >
          <SelectInput optionText={ExpenseCategoryTitle} />
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
        <ReferenceInput
          source="organizationVendor.id"
          reference="OrganizationVendor"
          label="Organization Vendor"
        >
          <SelectInput optionText={OrganizationVendorTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="invoiceItem"
          reference="InvoiceItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagExpense"
          reference="TagExpense"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagExpenseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
