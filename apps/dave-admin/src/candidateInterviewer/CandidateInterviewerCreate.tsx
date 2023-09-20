import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { CandidateInterviewTitle } from "../candidateInterview/CandidateInterviewTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { CandidateFeedbackTitle } from "../candidateFeedback/CandidateFeedbackTitle";

export const CandidateInterviewerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="candidateInterview.id"
          reference="CandidateInterview"
          label="Candidate Interview"
        >
          <SelectInput optionText={CandidateInterviewTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="candidateFeedback.id"
          reference="CandidateFeedback"
          label="Candidate Feedback"
        >
          <SelectInput optionText={CandidateFeedbackTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
