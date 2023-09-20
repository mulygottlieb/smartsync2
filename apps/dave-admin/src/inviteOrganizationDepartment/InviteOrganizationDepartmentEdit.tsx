import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InviteTitle } from "../invite/InviteTitle";
import { OrganizationDepartmentTitle } from "../organizationDepartment/OrganizationDepartmentTitle";

export const InviteOrganizationDepartmentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
