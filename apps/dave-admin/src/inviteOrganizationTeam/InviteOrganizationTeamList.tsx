import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INVITE_TITLE_FIELD } from "../invite/InviteTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";

export const InviteOrganizationTeamList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InviteOrganizationTeams"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Invite" source="invite.id" reference="Invite">
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
    </List>
  );
};
