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

import { APPROVALPOLICY_TITLE_FIELD } from "./ApprovalPolicyTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const ApprovalPolicyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <TextField label="Approval Type" source="approvalType" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="RequestApproval"
          target="approvalPolicyId"
          label="RequestApprovals"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Status" source="status" />
            <TextField label="Created By" source="createdBy" />
            <TextField label="Created By Name" source="createdByName" />
            <TextField label="Min Count" source="minCount" />
            <TextField label="Request Id" source="requestId" />
            <TextField label="Request Type" source="requestType" />
            <ReferenceField
              label="Approval Policy"
              source="approvalpolicy.id"
              reference="ApprovalPolicy"
            >
              <TextField source={APPROVALPOLICY_TITLE_FIELD} />
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
