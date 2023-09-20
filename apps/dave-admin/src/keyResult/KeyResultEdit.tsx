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
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";
import { GoalKpiTitle } from "../goalKpi/GoalKpiTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TaskTitle } from "../task/TaskTitle";
import { GoalTitle } from "../goal/GoalTitle";
import { KeyResultUpdateTitle } from "../keyResultUpdate/KeyResultUpdateTitle";

export const KeyResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" source="description" />
        <TextInput label="Type Field" source="typeField" />
        <NumberInput step={1} label="Target Value" source="targetValue" />
        <NumberInput step={1} label="Initial Value" source="initialValue" />
        <TextInput label="Unit" source="unit" />
        <NumberInput step={1} label="Update" source="update" />
        <NumberInput step={1} label="Progress" source="progress" />
        <TextInput label="Deadline" source="deadline" />
        <DateTimeInput label="Hard Deadline" source="hardDeadline" />
        <DateTimeInput label="Soft Deadline" source="softDeadline" />
        <TextInput label="Status" source="status" />
        <TextInput label="Weight" source="weight" />
        <ReferenceInput
          source="organizationProject.id"
          reference="OrganizationProject"
          label="Organization Project"
        >
          <SelectInput optionText={OrganizationProjectTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="goalKpi.id"
          reference="GoalKpi"
          label="Goal Kpi"
        >
          <SelectInput optionText={GoalKpiTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employeeKeyResultOwnerIdToemployee.id"
          reference="Employee"
          label="Employee Key Result Owner Id Toemployee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employeeKeyResultLeadIdToemployee.id"
          reference="Employee"
          label="Employee Key Result Lead Id Toemployee"
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
        <ReferenceInput source="task.id" reference="Task" label="Task">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="goalGoalAlignedKeyResultIdTokeyResult"
          reference="Goal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="goalKeyResultGoalIdTogoal.id"
          reference="Goal"
          label="Goal Key Result Goal Id Togoal"
        >
          <SelectInput optionText={GoalTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="keyResultUpdate"
          reference="KeyResultUpdate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyResultUpdateTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
