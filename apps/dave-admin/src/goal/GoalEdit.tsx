import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { KeyResultTitle } from "../keyResult/KeyResultTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const GoalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" source="description" />
        <TextInput label="Deadline" source="deadline" />
        <TextInput label="Level" source="level" />
        <NumberInput step={1} label="Progress" source="progress" />
        <ReferenceInput
          source="employeeGoalOwnerEmployeeIdToemployee.id"
          reference="Employee"
          label="Employee Goal Owner Employee Id Toemployee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="keyResultGoalAlignedKeyResultIdTokeyResult.id"
          reference="KeyResult"
          label="Key Result Goal Aligned Key Result Id Tokey Result"
        >
          <SelectInput optionText={KeyResultTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationTeam.id"
          reference="OrganizationTeam"
          label="Organization Team"
        >
          <SelectInput optionText={OrganizationTeamTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employeeGoalLeadIdToemployee.id"
          reference="Employee"
          label="Employee Goal Lead Id Toemployee"
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
          source="keyResultKeyResultGoalIdTogoal"
          reference="KeyResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyResultTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
