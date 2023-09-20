import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { TaskTitle } from "../task/TaskTitle";

export const OrganizationTeamTasksTaskCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
