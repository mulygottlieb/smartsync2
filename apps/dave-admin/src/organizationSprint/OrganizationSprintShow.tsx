import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORGANIZATIONSPRINT_TITLE_FIELD } from "./OrganizationSprintTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const OrganizationSprintShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Goal" source="goal" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Length" source="length" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Day Start" source="dayStart" />
        <BooleanField label="Is Active" source="isActive" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Project"
          source="organizationproject.id"
          reference="OrganizationProject"
        >
          <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Task"
          target="organizationSprintId"
          label="Tasks"
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
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
