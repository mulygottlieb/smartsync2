import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD } from "../organizationEmploymentType/OrganizationEmploymentTypeTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const TagOrganizationEmploymentTypeList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TagOrganizationEmploymentTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Organization Employment Type"
          source="organizationemploymenttype.id"
          reference="OrganizationEmploymentType"
        >
          <TextField source={ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
