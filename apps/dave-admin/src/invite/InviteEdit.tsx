import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { RoleTitle } from "../role/RoleTitle";
import { InviteOrganizationContactTitle } from "../inviteOrganizationContact/InviteOrganizationContactTitle";
import { InviteOrganizationDepartmentTitle } from "../inviteOrganizationDepartment/InviteOrganizationDepartmentTitle";
import { InviteOrganizationProjectTitle } from "../inviteOrganizationProject/InviteOrganizationProjectTitle";
import { InviteOrganizationTeamTitle } from "../inviteOrganizationTeam/InviteOrganizationTeamTitle";

export const InviteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Token" source="token" />
        <TextInput label="Email" source="email" />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Expire Date" source="expireDate" />
        <DateTimeInput label="Action Date" source="actionDate" />
        <NumberInput step={1} label="Code" source="code" />
        <TextInput label="Full Name" source="fullName" />
        <ReferenceInput
          source="userInviteInvitedByIdTouser.id"
          reference="User"
          label="User Invite Invited By Id Touser"
        >
          <SelectInput optionText={UserTitle} />
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
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userInviteUserIdTouser.id"
          reference="User"
          label="User Invite User Id Touser"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="inviteOrganizationContact"
          reference="InviteOrganizationContact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteOrganizationContactTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inviteOrganizationDepartment"
          reference="InviteOrganizationDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteOrganizationDepartmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inviteOrganizationProject"
          reference="InviteOrganizationProject"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteOrganizationProjectTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inviteOrganizationTeam"
          reference="InviteOrganizationTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteOrganizationTeamTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
