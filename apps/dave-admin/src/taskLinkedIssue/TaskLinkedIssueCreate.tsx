import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TaskTitle } from "../task/TaskTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const TaskLinkedIssueCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Action" source="action" />
        <ReferenceInput
          source="taskTaskLinkedIssuesTaskToIdTotask.id"
          reference="Task"
          label="Task Task Linked Issues Task To Id Totask"
        >
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="taskTaskLinkedIssuesTaskFromIdTotask.id"
          reference="Task"
          label="Task Task Linked Issues Task From Id Totask"
        >
          <SelectInput optionText={TaskTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
