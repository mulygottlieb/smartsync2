import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { KNOWLEDGEBASE_TITLE_FIELD } from "./KnowledgeBaseTitle";

export const KnowledgeBaseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Flag" source="flag" />
        <TextField label="Icon" source="icon" />
        <TextField label="Privacy" source="privacy" />
        <TextField label="Language" source="language" />
        <TextField label="Color" source="color" />
        <TextField label="Description" source="description" />
        <TextField label="Data" source="data" />
        <TextField label="Index" source="index" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Knowledge Base"
          source="knowledgebase.id"
          reference="KnowledgeBase"
        >
          <TextField source={KNOWLEDGEBASE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="KnowledgeBase"
          target="parentId"
          label="KnowledgeBases"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Flag" source="flag" />
            <TextField label="Icon" source="icon" />
            <TextField label="Privacy" source="privacy" />
            <TextField label="Language" source="language" />
            <TextField label="Color" source="color" />
            <TextField label="Description" source="description" />
            <TextField label="Data" source="data" />
            <TextField label="Index" source="index" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Knowledge Base"
              source="knowledgebase.id"
              reference="KnowledgeBase"
            >
              <TextField source={KNOWLEDGEBASE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="KnowledgeBaseArticle"
          target="categoryId"
          label="KnowledgeBaseArticles"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Data" source="data" />
            <BooleanField label="Draft" source="draft" />
            <BooleanField label="Privacy" source="privacy" />
            <TextField label="Index" source="index" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Knowledge Base"
              source="knowledgebase.id"
              reference="KnowledgeBase"
            >
              <TextField source={KNOWLEDGEBASE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
