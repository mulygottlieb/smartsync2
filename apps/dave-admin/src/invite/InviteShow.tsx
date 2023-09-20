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

import { INVITE_TITLE_FIELD } from "./InviteTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { ORGANIZATIONDEPARTMENT_TITLE_FIELD } from "../organizationDepartment/OrganizationDepartmentTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";

export const InviteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Token" source="token" />
        <TextField label="Email" source="email" />
        <TextField label="Status" source="status" />
        <TextField label="Expire Date" source="expireDate" />
        <TextField label="Action Date" source="actionDate" />
        <TextField label="Code" source="code" />
        <TextField label="Full Name" source="fullName" />
        <ReferenceField
          label="User Invite Invited By Id Touser"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
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
        <ReferenceField label="Role" source="role.id" reference="Role">
          <TextField source={ROLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Invite User Id Touser"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="InviteOrganizationContact"
          target="inviteId"
          label="InviteOrganizationContacts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Invite"
              source="invite.id"
              reference="Invite"
            >
              <TextField source={INVITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InviteOrganizationDepartment"
          target="inviteId"
          label="InviteOrganizationDepartments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Invite"
              source="invite.id"
              reference="Invite"
            >
              <TextField source={INVITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Department"
              source="organizationdepartment.id"
              reference="OrganizationDepartment"
            >
              <TextField source={ORGANIZATIONDEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InviteOrganizationProject"
          target="inviteId"
          label="InviteOrganizationProjects"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Invite"
              source="invite.id"
              reference="Invite"
            >
              <TextField source={INVITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InviteOrganizationTeam"
          target="inviteId"
          label="InviteOrganizationTeams"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Invite"
              source="invite.id"
              reference="Invite"
            >
              <TextField source={INVITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
