import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { EXPENSECATEGORY_TITLE_FIELD } from "../expenseCategory/ExpenseCategoryTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { ORGANIZATIONVENDOR_TITLE_FIELD } from "./OrganizationVendorTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const OrganizationVendorShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Email" source="email" />
        <TextField label="Phone" source="phone" />
        <TextField label="Website" source="website" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Expense"
          target="vendorId"
          label="Expenses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Amount" source="amount" />
            <TextField label="Type Of Expense" source="typeOfExpense" />
            <TextField label="Notes" source="notes" />
            <TextField label="Currency" source="currency" />
            <TextField label="Value Date" source="valueDate" />
            <TextField label="Purpose" source="purpose" />
            <TextField label="Tax Type" source="taxType" />
            <TextField label="Tax Label" source="taxLabel" />
            <TextField label="Rate Value" source="rateValue" />
            <TextField label="Receipt" source="receipt" />
            <BooleanField label="Split Expense" source="splitExpense" />
            <TextField label="Reference" source="reference" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Expense Category"
              source="expensecategory.id"
              reference="ExpenseCategory"
            >
              <TextField source={EXPENSECATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Vendor"
              source="organizationvendor.id"
              reference="OrganizationVendor"
            >
              <TextField source={ORGANIZATIONVENDOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationVendor"
          target="organizationVendorId"
          label="TagOrganizationVendors"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Vendor"
              source="organizationvendor.id"
              reference="OrganizationVendor"
            >
              <TextField source={ORGANIZATIONVENDOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
