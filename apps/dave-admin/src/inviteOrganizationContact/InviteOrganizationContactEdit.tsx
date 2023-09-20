import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InviteTitle } from "../invite/InviteTitle";
import { OrganizationContactTitle } from "../organizationContact/OrganizationContactTitle";

export const InviteOrganizationContactEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="invite.id" reference="Invite" label="Invite">
          <SelectInput optionText={InviteTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationContact.id"
          reference="OrganizationContact"
          label="Organization Contact"
        >
          <SelectInput optionText={OrganizationContactTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
