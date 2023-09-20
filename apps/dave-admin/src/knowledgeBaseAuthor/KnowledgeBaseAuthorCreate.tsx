import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TenantTitle } from "../tenant/TenantTitle";
import { KnowledgeBaseArticleTitle } from "../knowledgeBaseArticle/KnowledgeBaseArticleTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const KnowledgeBaseAuthorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="knowledgeBaseArticle.id"
          reference="KnowledgeBaseArticle"
          label="Knowledge Base Article"
        >
          <SelectInput optionText={KnowledgeBaseArticleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
