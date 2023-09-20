import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InviteTitle } from "../invite/InviteTitle";
import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";

export const InviteOrganizationProjectEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="invite.id" reference="Invite" label="Invite">
          <SelectInput optionText={InviteTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationProject.id"
          reference="OrganizationProject"
          label="Organization Project"
        >
          <SelectInput optionText={OrganizationProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
