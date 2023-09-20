import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ORGANIZATIONSPRINT_TITLE_FIELD } from "../organizationSprint/OrganizationSprintTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TASK_TITLE_FIELD } from "./TaskTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Title" source="title" />
        <TextField label="Description" source="description" />
        <TextField label="Status" source="status" />
        <TextField label="Estimate" source="estimate" />
        <TextField label="Due Date" source="dueDate" />
        <TextField label="Number Field" source="numberField" />
        <TextField label="Prefix" source="prefix" />
        <TextField label="Priority" source="priority" />
        <TextField label="Size" source="size" />
        <BooleanField label="Public Field" source="publicField" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Resolved At" source="resolvedAt" />
        <TextField label="Version" source="version" />
        <TextField label="Issue Type" source="issueType" />
        <ReferenceField
          label="Organization Sprint"
          source="organizationsprint.id"
          reference="OrganizationSprint"
        >
          <TextField source={ORGANIZATIONSPRINT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Project"
          source="organizationproject.id"
          reference="OrganizationProject"
        >
          <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Task" source="task.id" reference="Task">
          <TextField source={TASK_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
