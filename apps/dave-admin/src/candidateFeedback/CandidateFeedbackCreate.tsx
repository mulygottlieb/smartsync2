import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CandidateInterviewTitle } from "../candidateInterview/CandidateInterviewTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { CandidateInterviewerTitle } from "../candidateInterviewer/CandidateInterviewerTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { CandidateCriterionRatingTitle } from "../candidateCriterionRating/CandidateCriterionRatingTitle";

export const CandidateFeedbackCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <NumberInput label="Rating" source="rating" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "APPLIED", value: "APPLIED" },
            { label: "REJECTED", value: "REJECTED" },
            { label: "HIRED", value: "HIRED" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
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
        <ReferenceInput
          source="candidateInterviewer.id"
          reference="CandidateInterviewer"
          label="Candidate Interviewer"
        >
          <SelectInput optionText={CandidateInterviewerTitle} />
        </ReferenceInput>
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
        <ReferenceArrayInput
          source="candidateCriterionRating"
          reference="CandidateCriterionRating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateCriterionRatingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
