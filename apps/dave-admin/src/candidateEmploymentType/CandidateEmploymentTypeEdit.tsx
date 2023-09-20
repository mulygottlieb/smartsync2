import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { OrganizationEmploymentTypeTitle } from "../organizationEmploymentType/OrganizationEmploymentTypeTitle";

export const CandidateEmploymentTypeEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
