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

import { ApprovalPolicyTitle } from "../approvalPolicy/ApprovalPolicyTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { RequestApprovalEmployeeTitle } from "../requestApprovalEmployee/RequestApprovalEmployeeTitle";
import { RequestApprovalTeamTitle } from "../requestApprovalTeam/RequestApprovalTeamTitle";
import { TagRequestApprovalTitle } from "../tagRequestApproval/TagRequestApprovalTitle";

export const RequestApprovalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Status" source="status" />
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="Created By Name" source="createdByName" />
        <NumberInput step={1} label="Min Count" source="minCount" />
        <TextInput label="Request Id" source="requestId" />
        <TextInput label="Request Type" source="requestType" />
        <ReferenceInput
          source="approvalPolicy.id"
          reference="ApprovalPolicy"
          label="Approval Policy"
        >
          <SelectInput optionText={ApprovalPolicyTitle} />
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
          source="requestApprovalEmployee"
          reference="RequestApprovalEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestApprovalEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requestApprovalTeam"
          reference="RequestApprovalTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestApprovalTeamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagRequestApproval"
          reference="TagRequestApproval"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagRequestApprovalTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
