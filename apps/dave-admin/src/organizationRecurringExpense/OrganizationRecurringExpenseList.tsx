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
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const OrganizationRecurringExpenseList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrganizationRecurringExpenses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Start Day" source="startDay" />
        <TextField label="Start Month" source="startMonth" />
        <TextField label="Start Year" source="startYear" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Day" source="endDay" />
        <TextField label="End Month" source="endMonth" />
        <TextField label="End Year" source="endYear" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Category Name" source="categoryName" />
        <TextField label="Value" source="value" />
        <TextField label="Currency" source="currency" />
        <BooleanField label="Split Expense" source="splitExpense" />
        <TextField
          label="Parent Recurring Expense Id"
          source="parentRecurringExpenseId"
        />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
