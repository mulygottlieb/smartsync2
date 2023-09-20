import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { REQUESTAPPROVAL_TITLE_FIELD } from "../requestApproval/RequestApprovalTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";

export const RequestApprovalTeamShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Team"
          source="organizationteam.id"
          reference="OrganizationTeam"
        >
          <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
