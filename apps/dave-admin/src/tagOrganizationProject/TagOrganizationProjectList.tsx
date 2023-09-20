import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";

export const TagOrganizationProjectList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TagOrganizationProjects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Project"
          source="organizationproject.id"
          reference="OrganizationProject"
        >
          <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
