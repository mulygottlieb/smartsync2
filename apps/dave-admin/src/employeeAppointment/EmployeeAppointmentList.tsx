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
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const EmployeeAppointmentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmployeeAppointments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
