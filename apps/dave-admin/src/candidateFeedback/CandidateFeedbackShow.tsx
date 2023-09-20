import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CANDIDATEFEEDBACK_TITLE_FIELD } from "./CandidateFeedbackTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { CANDIDATEPERSONALQUALITY_TITLE_FIELD } from "../candidatePersonalQuality/CandidatePersonalQualityTitle";
import { CANDIDATETECHNOLOGY_TITLE_FIELD } from "../candidateTechnology/CandidateTechnologyTitle";
import { CANDIDATEINTERVIEW_TITLE_FIELD } from "../candidateInterview/CandidateInterviewTitle";
import { CANDIDATEINTERVIEWER_TITLE_FIELD } from "../candidateInterviewer/CandidateInterviewerTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";

export const CandidateFeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Description" source="description" />
        <TextField label="Rating" source="rating" />
        <TextField label="Status" source="status" />
        <ReferenceField
          label="Candidate Interview"
          source="candidateinterview.id"
          reference="CandidateInterview"
        >
          <TextField source={CANDIDATEINTERVIEW_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Candidate Interviewer"
          source="candidateinterviewer.id"
          reference="CandidateInterviewer"
        >
          <TextField source={CANDIDATEINTERVIEWER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="CandidateCriterionRating"
          target="feedbackId"
          label="CandidateCriterionRatings"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Candidate Feedback"
              source="candidatefeedback.id"
              reference="CandidateFeedback"
            >
              <TextField source={CANDIDATEFEEDBACK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Candidate Personal Quality"
              source="candidatepersonalquality.id"
              reference="CandidatePersonalQuality"
            >
              <TextField source={CANDIDATEPERSONALQUALITY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Candidate Technology"
              source="candidatetechnology.id"
              reference="CandidateTechnology"
            >
              <TextField source={CANDIDATETECHNOLOGY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
