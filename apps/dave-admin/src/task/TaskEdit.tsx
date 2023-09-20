import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationSprintTitle } from "../organizationSprint/OrganizationSprintTitle";
import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TaskTitle } from "./TaskTitle";
import { UserTitle } from "../user/UserTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { ActivityTitle } from "../activity/ActivityTitle";
import { EmployeeTasksTaskTitle } from "../employeeTasksTask/EmployeeTasksTaskTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";
import { KeyResultTitle } from "../keyResult/KeyResultTitle";
import { OrganizationTeamTasksTaskTitle } from "../organizationTeamTasksTask/OrganizationTeamTasksTaskTitle";
import { TagTaskTitle } from "../tagTask/TagTaskTitle";
import { TaskEmployeeTitle } from "../taskEmployee/TaskEmployeeTitle";
import { TaskLinkedIssueTitle } from "../taskLinkedIssue/TaskLinkedIssueTitle";
import { TaskTeamTitle } from "../taskTeam/TaskTeamTitle";
import { TimeLogTitle } from "../timeLog/TimeLogTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" source="description" />
        <TextInput label="Status" source="status" />
        <NumberInput step={1} label="Estimate" source="estimate" />
        <DateTimeInput label="Due Date" source="dueDate" />
        <NumberInput step={1} label="Number Field" source="numberField" />
        <TextInput label="Prefix" source="prefix" />
        <TextInput label="Priority" source="priority" />
        <TextInput label="Size" source="size" />
        <BooleanInput label="Public Field" source="publicField" />
        <DateTimeInput label="Start Date" source="startDate" />
        <DateTimeInput label="Resolved At" source="resolvedAt" />
        <TextInput label="Version" source="version" />
        <TextInput label="Issue Type" source="issueType" />
        <ReferenceInput
          source="organizationSprint.id"
          reference="OrganizationSprint"
          label="Organization Sprint"
        >
          <SelectInput optionText={OrganizationSprintTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationProject.id"
          reference="OrganizationProject"
          label="Organization Project"
        >
          <SelectInput optionText={OrganizationProjectTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput source="task.id" reference="Task" label="Task">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
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
          source="employeeTasksTask"
          reference="EmployeeTasksTask"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTasksTaskTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invoiceItem"
          reference="InvoiceItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceItemTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="keyResult"
          reference="KeyResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyResultTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationTeamTasksTask"
          reference="OrganizationTeamTasksTask"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTeamTasksTaskTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagTask"
          reference="TagTask"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTaskTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="otherTask"
          reference="Task"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskEmployee"
          reference="TaskEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskLinkedIssuesTaskLinkedIssuesTaskToIdTotask"
          reference="TaskLinkedIssue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskLinkedIssueTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskLinkedIssuesTaskLinkedIssuesTaskFromIdTotask"
          reference="TaskLinkedIssue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskLinkedIssueTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskTeam"
          reference="TaskTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskTeamTitle} />
        </ReferenceArrayInput>
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
