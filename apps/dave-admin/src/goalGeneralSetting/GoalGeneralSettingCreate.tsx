import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const GoalGeneralSettingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Max Objectives" source="maxObjectives" />
        <NumberInput step={1} label="Max Key Results" source="maxKeyResults" />
        <BooleanInput
          label="Employee Can Create Objective"
          source="employeeCanCreateObjective"
        />
        <TextInput label="Can Own Objectives" source="canOwnObjectives" />
        <TextInput label="Can Own Key Result" source="canOwnKeyResult" />
        <BooleanInput label="Kr Type Kpi" source="krTypeKPI" />
        <BooleanInput label="Kr Type Task" source="krTypeTask" />
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
    </Create>
  );
};
