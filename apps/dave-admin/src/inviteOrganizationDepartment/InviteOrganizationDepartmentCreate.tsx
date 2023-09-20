import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InviteTitle } from "../invite/InviteTitle";
import { OrganizationDepartmentTitle } from "../organizationDepartment/OrganizationDepartmentTitle";

export const InviteOrganizationDepartmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="invite.id" reference="Invite" label="Invite">
          <SelectInput optionText={InviteTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationDepartment.id"
          reference="OrganizationDepartment"
          label="Organization Department"
        >
          <SelectInput optionText={OrganizationDepartmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
