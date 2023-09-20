import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { CANDIDATEINTERVIEW_TITLE_FIELD } from "../candidateInterview/CandidateInterviewTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { CANDIDATEFEEDBACK_TITLE_FIELD } from "../candidateFeedback/CandidateFeedbackTitle";

export const CandidateInterviewerShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Candidate Feedback"
          source="candidatefeedback.id"
          reference="CandidateFeedback"
        >
          <TextField source={CANDIDATEFEEDBACK_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
