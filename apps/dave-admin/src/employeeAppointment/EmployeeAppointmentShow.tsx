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

import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { EMPLOYEEAPPOINTMENT_TITLE_FIELD } from "./EmployeeAppointmentTitle";

export const EmployeeAppointmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Agenda" source="agenda" />
        <TextField label="Description" source="description" />
        <TextField label="Location" source="location" />
        <TextField label="Start Date Time" source="startDateTime" />
        <TextField label="End Date Time" source="endDateTime" />
        <BooleanField label="Buffer Time Start" source="bufferTimeStart" />
        <BooleanField label="Buffer Time End" source="bufferTimeEnd" />
        <TextField label="Buffer Time In Mins" source="bufferTimeInMins" />
        <TextField label="Break Time In Mins" source="breakTimeInMins" />
        <TextField label="Break Start Time" source="breakStartTime" />
        <TextField label="Emails" source="emails" />
        <TextField label="Status" source="status" />
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
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
        <ReferenceManyField
          reference="AppointmentEmployee"
          target="employeeAppointmentId"
          label="AppointmentEmployees"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Appointment Id" source="appointmentId" />
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
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee Appointment"
              source="employeeappointment.id"
              reference="EmployeeAppointment"
            >
              <TextField source={EMPLOYEEAPPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
