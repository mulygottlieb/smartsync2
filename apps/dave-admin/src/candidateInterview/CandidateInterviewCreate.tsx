import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { CandidateFeedbackTitle } from "../candidateFeedback/CandidateFeedbackTitle";
import { CandidateInterviewerTitle } from "../candidateInterviewer/CandidateInterviewerTitle";
import { CandidatePersonalQualityTitle } from "../candidatePersonalQuality/CandidatePersonalQualityTitle";
import { CandidateTechnologyTitle } from "../candidateTechnology/CandidateTechnologyTitle";

export const CandidateInterviewCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <DateTimeInput label="Start Time" source="startTime" />
        <DateTimeInput label="End Time" source="endTime" />
        <TextInput label="Location" source="location" />
        <TextInput label="Note" source="note" />
        <BooleanInput label="Is Archived" source="isArchived" />
        <NumberInput label="Rating" source="rating" />
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
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="candidateFeedback"
          reference="CandidateFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateFeedbackTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateInterviewer"
          reference="CandidateInterviewer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateInterviewerTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidatePersonalQuality"
          reference="CandidatePersonalQuality"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidatePersonalQualityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateTechnology"
          reference="CandidateTechnology"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateTechnologyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
