import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { TaskTitle } from "../task/TaskTitle";
import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { OrganizationContactTitle } from "../organizationContact/OrganizationContactTitle";
import { TimesheetTitle } from "../timesheet/TimesheetTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { TimeSlotTimeLogTitle } from "../timeSlotTimeLog/TimeSlotTimeLogTitle";

export const TimeLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Started At" source="startedAt" />
        <DateTimeInput label="Stopped At" source="stoppedAt" />
        <TextInput label="Log Type" source="logType" />
        <TextInput label="Source" source="source" />
        <TextInput label="Description" source="description" />
        <TextInput label="Reason" source="reason" />
        <BooleanInput label="Is Billable" source="isBillable" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <BooleanInput label="Is Running" source="isRunning" />
        <TextInput label="Version" source="version" />
        <ReferenceInput
          source="organizationTeam.id"
          reference="OrganizationTeam"
          label="Organization Team"
        >
          <SelectInput optionText={OrganizationTeamTitle} />
        </ReferenceInput>
        <ReferenceInput source="task.id" reference="Task" label="Task">
          <SelectInput optionText={TaskTitle} />
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
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationContact.id"
          reference="OrganizationContact"
          label="Organization Contact"
        >
          <SelectInput optionText={OrganizationContactTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="timesheet.id"
          reference="Timesheet"
          label="Timesheet"
        >
          <SelectInput optionText={TimesheetTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="timeSlotTimeLogs"
          reference="TimeSlotTimeLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeSlotTimeLogTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
