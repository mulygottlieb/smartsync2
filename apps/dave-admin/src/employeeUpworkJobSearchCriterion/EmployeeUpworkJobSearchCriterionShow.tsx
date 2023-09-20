import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { JOBPRESET_TITLE_FIELD } from "../jobPreset/JobPresetTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { JOBSEARCHOCCUPATION_TITLE_FIELD } from "../jobSearchOccupation/JobSearchOccupationTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { JOBSEARCHCATEGORY_TITLE_FIELD } from "../jobSearchCategory/JobSearchCategoryTitle";

export const EmployeeUpworkJobSearchCriterionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Keyword" source="keyword" />
        <TextField label="Job Type" source="jobType" />
        <ReferenceField
          label="Job Preset"
          source="jobpreset.id"
          reference="JobPreset"
        >
          <TextField source={JOBPRESET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Job Search Occupation"
          source="jobsearchoccupation.id"
          reference="JobSearchOccupation"
        >
          <TextField source={JOBSEARCHOCCUPATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Job Search Category"
          source="jobsearchcategory.id"
          reference="JobSearchCategory"
        >
          <TextField source={JOBSEARCHCATEGORY_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
