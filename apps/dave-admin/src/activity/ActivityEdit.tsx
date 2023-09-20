import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TaskTitle } from "../task/TaskTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";
import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const ActivityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" source="description" />
        <div />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Source" source="source" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <DateTimeInput label="Recorded At" source="recordedAt" />
        <ReferenceInput source="task.id" reference="Task" label="Task">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="timeSlot.id"
          reference="TimeSlot"
          label="Time Slot"
        >
          <SelectInput optionText={TimeSlotTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationProject.id"
          reference="OrganizationProject"
          label="Organization Project"
        >
          <SelectInput optionText={OrganizationProjectTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
