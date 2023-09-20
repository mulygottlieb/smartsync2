import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { TaskTitle } from "../task/TaskTitle";

export const OrganizationTeamTasksTaskEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="organizationTeam.id"
          reference="OrganizationTeam"
          label="Organization Team"
        >
          <SelectInput optionText={OrganizationTeamTitle} />
        </ReferenceInput>
        <ReferenceInput source="task.id" reference="Task" label="Task">
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
