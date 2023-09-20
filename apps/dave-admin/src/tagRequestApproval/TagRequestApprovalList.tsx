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
import { REQUESTAPPROVAL_TITLE_FIELD } from "../requestApproval/RequestApprovalTitle";

export const TagRequestApprovalList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TagRequestApprovals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Request Approval"
          source="requestapproval.id"
          reference="RequestApproval"
        >
          <TextField source={REQUESTAPPROVAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
