import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TenantTitle } from "../tenant/TenantTitle";
import { JobPresetTitle } from "../jobPreset/JobPresetTitle";
import { JobSearchCategoryTitle } from "../jobSearchCategory/JobSearchCategoryTitle";
import { JobSearchOccupationTitle } from "../jobSearchOccupation/JobSearchOccupationTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const JobPresetUpworkJobSearchCriterionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Keyword" source="keyword" />
        <TextInput label="Job Type" source="jobType" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="jobPreset.id"
          reference="JobPreset"
          label="Job Preset"
        >
          <SelectInput optionText={JobPresetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="jobSearchCategory.id"
          reference="JobSearchCategory"
          label="Job Search Category"
        >
          <SelectInput optionText={JobSearchCategoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="jobSearchOccupation.id"
          reference="JobSearchOccupation"
          label="Job Search Occupation"
        >
          <SelectInput optionText={JobSearchOccupationTitle} />
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
