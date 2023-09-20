import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const CandidateEducationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="School Name" source="schoolName" />
        <TextInput label="Degree" source="degree" />
        <TextInput label="Field" source="field" />
        <DateTimeInput label="Completion Date" source="completionDate" />
        <TextInput label="Notes" source="notes" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
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
