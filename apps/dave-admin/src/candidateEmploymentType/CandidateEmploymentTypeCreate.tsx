import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { OrganizationEmploymentTypeTitle } from "../organizationEmploymentType/OrganizationEmploymentTypeTitle";

export const CandidateEmploymentTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationEmploymentType.id"
          reference="OrganizationEmploymentType"
          label="Organization Employment Type"
        >
          <SelectInput optionText={OrganizationEmploymentTypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
