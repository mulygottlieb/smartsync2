import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobPresetTitle } from "../jobPreset/JobPresetTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { JobSearchOccupationTitle } from "../jobSearchOccupation/JobSearchOccupationTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { JobSearchCategoryTitle } from "../jobSearchCategory/JobSearchCategoryTitle";

export const EmployeeUpworkJobSearchCriterionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Keyword" source="keyword" />
        <TextInput label="Job Type" source="jobType" />
        <ReferenceInput
          source="jobPreset.id"
          reference="JobPreset"
          label="Job Preset"
        >
          <SelectInput optionText={JobPresetTitle} />
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
        <ReferenceInput
          source="jobSearchOccupation.id"
          reference="JobSearchOccupation"
          label="Job Search Occupation"
        >
          <SelectInput optionText={JobSearchOccupationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="jobSearchCategory.id"
          reference="JobSearchCategory"
          label="Job Search Category"
        >
          <SelectInput optionText={JobSearchCategoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
