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

import { TIMEOFFREQUEST_TITLE_FIELD } from "./TimeOffRequestTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { TIMEOFFPOLICY_TITLE_FIELD } from "../timeOffPolicy/TimeOffPolicyTitle";

export const TimeOffRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="TimeOffRequestEmployee"
          target="timeOffRequestId"
          label="TimeOffRequestEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Time Off Request"
              source="timeoffrequest.id"
              reference="TimeOffRequest"
            >
              <TextField source={TIMEOFFREQUEST_TITLE_FIELD} />
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
      </SimpleShowLayout>
    </Show>
  );
};
