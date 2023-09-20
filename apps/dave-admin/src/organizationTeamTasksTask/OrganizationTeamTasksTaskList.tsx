import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";

export const OrganizationTeamTasksTaskList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrganizationTeamTasksTasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Organization Team"
          source="organizationteam.id"
          reference="OrganizationTeam"
        >
          <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Task" source="task.id" reference="Task">
          <TextField source={TASK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
