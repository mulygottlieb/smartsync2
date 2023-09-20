import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CandidateFeedbackTitle } from "../candidateFeedback/CandidateFeedbackTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { CandidatePersonalQualityTitle } from "../candidatePersonalQuality/CandidatePersonalQualityTitle";
import { CandidateTechnologyTitle } from "../candidateTechnology/CandidateTechnologyTitle";

export const CandidateCriterionRatingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Rating" source="rating" />
        <ReferenceInput
          source="candidateFeedback.id"
          reference="CandidateFeedback"
          label="Candidate Feedback"
        >
          <SelectInput optionText={CandidateFeedbackTitle} />
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
        <ReferenceInput
          source="candidatePersonalQuality.id"
          reference="CandidatePersonalQuality"
          label="Candidate Personal Quality"
        >
          <SelectInput optionText={CandidatePersonalQualityTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="candidateTechnology.id"
          reference="CandidateTechnology"
          label="Candidate Technology"
        >
          <SelectInput optionText={CandidateTechnologyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
