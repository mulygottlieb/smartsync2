import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { AppointmentEmployeeTitle } from "../appointmentEmployee/AppointmentEmployeeTitle";

export const EmployeeAppointmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Agenda" source="agenda" />
        <TextInput label="Description" source="description" />
        <TextInput label="Location" source="location" />
        <DateTimeInput label="Start Date Time" source="startDateTime" />
        <DateTimeInput label="End Date Time" source="endDateTime" />
        <BooleanInput label="Buffer Time Start" source="bufferTimeStart" />
        <BooleanInput label="Buffer Time End" source="bufferTimeEnd" />
        <NumberInput
          step={1}
          label="Buffer Time In Mins"
          source="bufferTimeInMins"
        />
        <NumberInput
          step={1}
          label="Break Time In Mins"
          source="breakTimeInMins"
        />
        <DateTimeInput label="Break Start Time" source="breakStartTime" />
        <TextInput label="Emails" source="emails" />
        <TextInput label="Status" source="status" />
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
        <ReferenceArrayInput
          source="appointmentEmployee"
          reference="AppointmentEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentEmployeeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
