import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { KnowledgeBaseTitle } from "../knowledgeBase/KnowledgeBaseTitle";
import { KnowledgeBaseAuthorTitle } from "../knowledgeBaseAuthor/KnowledgeBaseAuthorTitle";

export const KnowledgeBaseArticleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" source="description" />
        <TextInput label="Data" source="data" />
        <BooleanInput label="Draft" source="draft" />
        <BooleanInput label="Privacy" source="privacy" />
        <NumberInput step={1} label="Index" source="index" />
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
          source="knowledgeBase.id"
          reference="KnowledgeBase"
          label="Knowledge Base"
        >
          <SelectInput optionText={KnowledgeBaseTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="knowledgeBaseAuthor"
          reference="KnowledgeBaseAuthor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KnowledgeBaseAuthorTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
