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

import { TIMEOFFPOLICY_TITLE_FIELD } from "./TimeOffPolicyTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";

export const TimeOffPolicyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <BooleanField label="Requires Approval" source="requiresApproval" />
        <BooleanField label="Paid" source="paid" />
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
        <ReferenceManyField
          reference="TimeOffPolicyEmployee"
          target="timeOffPolicyId"
          label="TimeOffPolicyEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Time Off Policy"
              source="timeoffpolicy.id"
              reference="TimeOffPolicy"
            >
              <TextField source={TIMEOFFPOLICY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TimeOffRequest"
          target="policyId"
          label="TimeOffRequests"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Document Url" source="documentUrl" />
            <TextField label="Description" source="description" />
            <TextField label="Start" source="start" />
            <TextField label="End" source="end" />
            <TextField label="Request Date" source="requestDate" />
            <TextField label="Status" source="status" />
            <BooleanField label="Is Holiday" source="isHoliday" />
            <BooleanField label="Is Archived" source="isArchived" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Time Off Policy"
              source="timeoffpolicy.id"
              reference="TimeOffPolicy"
            >
              <TextField source={TIMEOFFPOLICY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
