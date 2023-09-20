import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CandidateInterviewTitle } from "../candidateInterview/CandidateInterviewTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { CandidateCriterionRatingTitle } from "../candidateCriterionRating/CandidateCriterionRatingTitle";

export const CandidateTechnologyEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput label="Rating" source="rating" />
        <ReferenceInput
          source="candidateInterview.id"
          reference="CandidateInterview"
          label="Candidate Interview"
        >
          <SelectInput optionText={CandidateInterviewTitle} />
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
        <ReferenceArrayInput
          source="candidateCriterionRating"
          reference="CandidateCriterionRating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateCriterionRatingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
