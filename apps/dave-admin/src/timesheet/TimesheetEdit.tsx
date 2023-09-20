import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { UserTitle } from "../user/UserTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TimeLogTitle } from "../timeLog/TimeLogTitle";

export const TimesheetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Duration" source="duration" />
        <NumberInput step={1} label="Keyboard" source="keyboard" />
        <NumberInput step={1} label="Mouse" source="mouse" />
        <NumberInput step={1} label="Overall" source="overall" />
        <DateTimeInput label="Started At" source="startedAt" />
        <DateTimeInput label="Stopped At" source="stoppedAt" />
        <DateTimeInput label="Approved At" source="approvedAt" />
        <DateTimeInput label="Submitted At" source="submittedAt" />
        <DateTimeInput label="Locked At" source="lockedAt" />
        <BooleanInput label="Is Billed" source="isBilled" />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
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
        <ReferenceArrayInput
          source="timeLog"
          reference="TimeLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeLogTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
