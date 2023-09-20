import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const UserOrganizationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Is Default" source="isDefault" />
        <BooleanInput label="Is Active" source="isActive" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
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
      </SimpleForm>
    </Create>
  );
};