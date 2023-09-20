import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { EmployeeUpworkJobSearchCriterionTitle } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionTitle";
import { JobPresetUpworkJobSearchCriterionTitle } from "../jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionTitle";

export const JobSearchOccupationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput
          label="Job Source Occupation Id"
          source="jobSourceOccupationId"
        />
        <TextInput label="Job Source" source="jobSource" />
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
    </Edit>
  );
};
