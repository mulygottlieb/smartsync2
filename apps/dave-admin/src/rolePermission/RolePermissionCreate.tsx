import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { RoleTitle } from "../role/RoleTitle";

export const RolePermissionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Permission" source="permission" />
        <BooleanInput label="Enabled" source="enabled" />
        <TextInput label="Description" source="description" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
