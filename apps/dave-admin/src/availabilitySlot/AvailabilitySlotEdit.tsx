import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const AvailabilitySlotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Start Time" source="startTime" />
        <DateTimeInput label="End Time" source="endTime" />
        <BooleanInput label="All Day" source="allDay" />
        <TextInput label="Type Field" source="typeField" />
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
    </Edit>
  );
};
