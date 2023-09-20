import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const EmployeeRecurringExpenseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Start Day" source="startDay" />
        <NumberInput step={1} label="Start Month" source="startMonth" />
        <NumberInput step={1} label="Start Year" source="startYear" />
        <DateTimeInput label="Start Date" source="startDate" />
        <NumberInput step={1} label="End Day" source="endDay" />
        <NumberInput step={1} label="End Month" source="endMonth" />
        <NumberInput step={1} label="End Year" source="endYear" />
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Category Name" source="categoryName" />
        <NumberInput label="Value" source="value" />
        <TextInput label="Currency" source="currency" />
        <TextInput
          label="Parent Recurring Expense Id"
          source="parentRecurringExpenseId"
        />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
