import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { INVITE_TITLE_FIELD } from "../invite/InviteTitle";
import { ORGANIZATIONDEPARTMENT_TITLE_FIELD } from "../organizationDepartment/OrganizationDepartmentTitle";

export const InviteOrganizationDepartmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Invite" source="invite.id" reference="Invite">
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
      </SimpleShowLayout>
    </Show>
  );
};
