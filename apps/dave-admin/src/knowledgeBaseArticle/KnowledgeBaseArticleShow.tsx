import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { KNOWLEDGEBASEARTICLE_TITLE_FIELD } from "./KnowledgeBaseArticleTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { KNOWLEDGEBASE_TITLE_FIELD } from "../knowledgeBase/KnowledgeBaseTitle";

export const KnowledgeBaseArticleShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <TextField label="Data" source="data" />
        <BooleanField label="Draft" source="draft" />
        <BooleanField label="Privacy" source="privacy" />
        <TextField label="Index" source="index" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
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
        <ReferenceManyField
          reference="KnowledgeBaseAuthor"
          target="articleId"
          label="KnowledgeBaseAuthors"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Knowledge Base Article"
              source="knowledgebasearticle.id"
              reference="KnowledgeBaseArticle"
            >
              <TextField source={KNOWLEDGEBASEARTICLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
