import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORGANIZATIONPOSITION_TITLE_FIELD } from "../organizationPosition/OrganizationPositionTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const TagOrganizationPositionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TagOrganizationPositions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Organization Position"
          source="organizationposition.id"
          reference="OrganizationPosition"
        >
          <TextField source={ORGANIZATIONPOSITION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
