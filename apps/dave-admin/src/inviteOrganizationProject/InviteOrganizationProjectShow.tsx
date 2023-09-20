import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { INVITE_TITLE_FIELD } from "../invite/InviteTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";

export const InviteOrganizationProjectShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Invite" source="invite.id" reference="Invite">
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
      </SimpleShowLayout>
    </Show>
  );
};
