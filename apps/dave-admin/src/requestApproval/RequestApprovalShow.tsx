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

import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { REQUESTAPPROVAL_TITLE_FIELD } from "./RequestApprovalTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { APPROVALPOLICY_TITLE_FIELD } from "../approvalPolicy/ApprovalPolicyTitle";

export const RequestApprovalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="RequestApprovalEmployee"
          target="requestApprovalId"
          label="RequestApprovalEmployees"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Request Approval"
              source="requestapproval.id"
              reference="RequestApproval"
            >
              <TextField source={REQUESTAPPROVAL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RequestApprovalTeam"
          target="requestApprovalId"
          label="RequestApprovalTeams"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Request Approval"
              source="requestapproval.id"
              reference="RequestApproval"
            >
              <TextField source={REQUESTAPPROVAL_TITLE_FIELD} />
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
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagRequestApproval"
          target="requestApprovalId"
          label="TagRequestApprovals"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Request Approval"
              source="requestapproval.id"
              reference="RequestApproval"
            >
              <TextField source={REQUESTAPPROVAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
