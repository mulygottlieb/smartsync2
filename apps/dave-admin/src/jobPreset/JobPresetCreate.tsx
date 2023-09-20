import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { EmployeeJobPresetTitle } from "../employeeJobPreset/EmployeeJobPresetTitle";
import { EmployeeUpworkJobSearchCriterionTitle } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionTitle";
import { JobPresetUpworkJobSearchCriterionTitle } from "../jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionTitle";

export const JobPresetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
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
        <ReferenceArrayInput
          source="employeeJobPreset"
          reference="EmployeeJobPreset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeJobPresetTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeUpworkJobSearchCriterion"
          reference="EmployeeUpworkJobSearchCriterion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput
            optionText={EmployeeUpworkJobSearchCriterionTitle}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobPresetUpworkJobSearchCriterion"
          reference="JobPresetUpworkJobSearchCriterion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput
            optionText={JobPresetUpworkJobSearchCriterionTitle}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
