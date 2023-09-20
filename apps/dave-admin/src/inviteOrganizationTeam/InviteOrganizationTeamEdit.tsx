import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { InviteTitle } from "../invite/InviteTitle";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";

export const InviteOrganizationTeamEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="invite.id" reference="Invite" label="Invite">
          <SelectInput optionText={InviteTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationTeam.id"
          reference="OrganizationTeam"
          label="Organization Team"
        >
          <SelectInput optionText={OrganizationTeamTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
