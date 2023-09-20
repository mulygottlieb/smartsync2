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
import { CandidateDepartmentTitle } from "../candidateDepartment/CandidateDepartmentTitle";
import { InviteOrganizationDepartmentTitle } from "../inviteOrganizationDepartment/InviteOrganizationDepartmentTitle";
import { OrganizationDepartmentEmployeeTitle } from "../organizationDepartmentEmployee/OrganizationDepartmentEmployeeTitle";
import { TagOrganizationDepartmentTitle } from "../tagOrganizationDepartment/TagOrganizationDepartmentTitle";

export const OrganizationDepartmentCreate = (
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
          source="candidateDepartment"
          reference="CandidateDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateDepartmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inviteOrganizationDepartment"
          reference="InviteOrganizationDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteOrganizationDepartmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationDepartmentEmployee"
          reference="OrganizationDepartmentEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationDepartmentEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganizationDepartment"
          reference="TagOrganizationDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationDepartmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
