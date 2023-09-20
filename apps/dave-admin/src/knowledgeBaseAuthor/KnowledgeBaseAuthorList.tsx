import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { KNOWLEDGEBASEARTICLE_TITLE_FIELD } from "../knowledgeBaseArticle/KnowledgeBaseArticleTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const KnowledgeBaseAuthorList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"KnowledgeBaseAuthors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
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
    </List>
  );
};
