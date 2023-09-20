import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { RequestApprovalTitle } from "../requestApproval/RequestApprovalTitle";

export const ApprovalPolicyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" source="description" />
        <TextInput label="Approval Type" source="approvalType" />
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
        <ReferenceArrayInput
          source="requestApproval"
          reference="RequestApproval"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestApprovalTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
