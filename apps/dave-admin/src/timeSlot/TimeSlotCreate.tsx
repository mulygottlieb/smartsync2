import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TimeSlotTimeLogTitle } from "../timeSlotTimeLog/TimeSlotTimeLogTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { ActivityTitle } from "../activity/ActivityTitle";
import { ScreenshotTitle } from "../screenshot/ScreenshotTitle";
import { TimeSlotMinuteTitle } from "../timeSlotMinute/TimeSlotMinuteTitle";

export const TimeSlotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="timeSlotTimeLogs"
          reference="TimeSlotTimeLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeSlotTimeLogTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Duration" source="duration" />
        <NumberInput step={1} label="Keyboard" source="keyboard" />
        <NumberInput step={1} label="Mouse" source="mouse" />
        <NumberInput step={1} label="Overall" source="overall" />
        <DateTimeInput label="Started At" source="startedAt" />
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
          source="activity"
          reference="Activity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActivityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="screenshot"
          reference="Screenshot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScreenshotTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeSlotMinute"
          reference="TimeSlotMinute"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeSlotMinuteTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
