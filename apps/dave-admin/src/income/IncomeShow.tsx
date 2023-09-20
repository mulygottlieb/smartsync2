import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { INCOME_TITLE_FIELD } from "./IncomeTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const IncomeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Amount" source="amount" />
        <TextField label="Currency" source="currency" />
        <TextField label="Value Date" source="valueDate" />
        <TextField label="Notes" source="notes" />
        <BooleanField label="Is Bonus" source="isBonus" />
        <TextField label="Reference" source="reference" />
        <ReferenceField
          label="Organization Contact"
          source="organizationcontact.id"
          reference="OrganizationContact"
        >
          <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
        </ReferenceField>
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
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="TagIncome"
          target="incomeId"
          label="TagIncomes"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Income"
              source="income.id"
              reference="Income"
            >
              <TextField source={INCOME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
