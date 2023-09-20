import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CANDIDATEINTERVIEW_TITLE_FIELD } from "./CandidateInterviewTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { CANDIDATEINTERVIEWER_TITLE_FIELD } from "../candidateInterviewer/CandidateInterviewerTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { CANDIDATEFEEDBACK_TITLE_FIELD } from "../candidateFeedback/CandidateFeedbackTitle";

export const CandidateInterviewShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Start Time" source="startTime" />
        <TextField label="End Time" source="endTime" />
        <TextField label="Location" source="location" />
        <TextField label="Note" source="note" />
        <BooleanField label="Is Archived" source="isArchived" />
        <TextField label="Rating" source="rating" />
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
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="CandidateFeedback"
          target="interviewId"
          label="CandidateFeedbacks"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidateInterviewer"
          target="interviewId"
          label="CandidateInterviewers"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Candidate Interview"
              source="candidateinterview.id"
              reference="CandidateInterview"
            >
              <TextField source={CANDIDATEINTERVIEW_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Candidate Feedback"
              source="candidatefeedback.id"
              reference="CandidateFeedback"
            >
              <TextField source={CANDIDATEFEEDBACK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidatePersonalQuality"
          target="interviewId"
          label="CandidatePersonalQualities"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidateTechnology"
          target="interviewId"
          label="CandidateTechnologies"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Rating" source="rating" />
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
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
