import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationContactTitle } from "../organizationContact/OrganizationContactTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { TagProposalTitle } from "../tagProposal/TagProposalTitle";

export const ProposalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Job Post Url" source="jobPostUrl" />
        <DateTimeInput label="Value Date" source="valueDate" />
        <TextInput label="Job Post Content" source="jobPostContent" />
        <TextInput label="Proposal Content" source="proposalContent" />
        <TextInput label="Status" source="status" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationContact.id"
          reference="OrganizationContact"
          label="Organization Contact"
        >
          <SelectInput optionText={OrganizationContactTitle} />
        </ReferenceInput>
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
        <ReferenceArrayInput
          source="tagProposal"
          reference="TagProposal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagProposalTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
