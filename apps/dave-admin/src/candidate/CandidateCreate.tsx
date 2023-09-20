import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { OrganizationPositionTitle } from "../organizationPosition/OrganizationPositionTitle";
import { UserTitle } from "../user/UserTitle";
import { CandidateSourceTitle } from "../candidateSource/CandidateSourceTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { CandidateDepartmentTitle } from "../candidateDepartment/CandidateDepartmentTitle";
import { CandidateDocumentTitle } from "../candidateDocument/CandidateDocumentTitle";
import { CandidateEducationTitle } from "../candidateEducation/CandidateEducationTitle";
import { CandidateEmploymentTypeTitle } from "../candidateEmploymentType/CandidateEmploymentTypeTitle";
import { CandidateExperienceTitle } from "../candidateExperience/CandidateExperienceTitle";
import { CandidateFeedbackTitle } from "../candidateFeedback/CandidateFeedbackTitle";
import { CandidateInterviewTitle } from "../candidateInterview/CandidateInterviewTitle";
import { CandidateSkillTitle } from "../candidateSkill/CandidateSkillTitle";
import { TagCandidateTitle } from "../tagCandidate/TagCandidateTitle";

export const CandidateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Rating" source="rating" />
        <DateTimeInput label="Value Date" source="valueDate" />
        <DateTimeInput label="Applied Date" source="appliedDate" />
        <DateTimeInput label="Hired Date" source="hiredDate" />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Reject Date" source="rejectDate" />
        <TextInput label="Candidate Level" source="candidateLevel" />
        <NumberInput step={1} label="Re Weekly Limit" source="reWeeklyLimit" />
        <TextInput label="Bill Rate Currency" source="billRateCurrency" />
        <NumberInput step={1} label="Bill Rate Value" source="billRateValue" />
        <TextInput label="Pay Period" source="payPeriod" />
        <TextInput label="Cv Url" source="cvUrl" />
        <BooleanInput label="Is Archived" source="isArchived" />
        <NumberInput
          step={1}
          label="Minimum Billing Rate"
          source="minimumBillingRate"
        />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationPosition.id"
          reference="OrganizationPosition"
          label="Organization Position"
        >
          <SelectInput optionText={OrganizationPositionTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="candidateSource.id"
          reference="CandidateSource"
          label="Candidate Source"
        >
          <SelectInput optionText={CandidateSourceTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="candidateDepartment"
          reference="CandidateDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateDepartmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateDocument"
          reference="CandidateDocument"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateDocumentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateEducation"
          reference="CandidateEducation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateEducationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateEmploymentType"
          reference="CandidateEmploymentType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateEmploymentTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateExperience"
          reference="CandidateExperience"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateExperienceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateFeedback"
          reference="CandidateFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateFeedbackTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateInterview"
          reference="CandidateInterview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateInterviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateSkill"
          reference="CandidateSkill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateSkillTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagCandidate"
          reference="TagCandidate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagCandidateTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
