import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { KnowledgeBaseTitle } from "./KnowledgeBaseTitle";
import { KnowledgeBaseArticleTitle } from "../knowledgeBaseArticle/KnowledgeBaseArticleTitle";

export const KnowledgeBaseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Flag" source="flag" />
        <TextInput label="Icon" source="icon" />
        <TextInput label="Privacy" source="privacy" />
        <TextInput label="Language" source="language" />
        <TextInput label="Color" source="color" />
        <TextInput label="Description" source="description" />
        <TextInput label="Data" source="data" />
        <NumberInput step={1} label="Index" source="index" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="knowledgeBase.id"
          reference="KnowledgeBase"
          label="Knowledge Base"
        >
          <SelectInput optionText={KnowledgeBaseTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="otherKnowledgeBase"
          reference="KnowledgeBase"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KnowledgeBaseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="knowledgeBaseArticle"
          reference="KnowledgeBaseArticle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KnowledgeBaseArticleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
