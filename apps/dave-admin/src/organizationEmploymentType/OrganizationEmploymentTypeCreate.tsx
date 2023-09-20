import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { CandidateEmploymentTypeTitle } from "../candidateEmploymentType/CandidateEmploymentTypeTitle";
import { OrganizationEmploymentTypeEmployeeTitle } from "../organizationEmploymentTypeEmployee/OrganizationEmploymentTypeEmployeeTitle";
import { TagOrganizationEmploymentTypeTitle } from "../tagOrganizationEmploymentType/TagOrganizationEmploymentTypeTitle";

export const OrganizationEmploymentTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
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
        <ReferenceArrayInput
          source="candidateEmploymentType"
          reference="CandidateEmploymentType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateEmploymentTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationEmploymentTypeEmployee"
          reference="OrganizationEmploymentTypeEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput
            optionText={OrganizationEmploymentTypeEmployeeTitle}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganizationEmploymentType"
          reference="TagOrganizationEmploymentType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationEmploymentTypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
