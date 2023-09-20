import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GoalTemplateTitle } from "../goalTemplate/GoalTemplateTitle";
import { GoalKpiTemplateTitle } from "../goalKpiTemplate/GoalKpiTemplateTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const KeyResultTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Unit" source="unit" />
        <NumberInput step={1} label="Target Value" source="targetValue" />
        <NumberInput step={1} label="Initial Value" source="initialValue" />
        <TextInput label="Deadline" source="deadline" />
        <ReferenceInput
          source="goalTemplate.id"
          reference="GoalTemplate"
          label="Goal Template"
        >
          <SelectInput optionText={GoalTemplateTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="goalKpiTemplate.id"
          reference="GoalKpiTemplate"
          label="Goal Kpi Template"
        >
          <SelectInput optionText={GoalKpiTemplateTitle} />
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
