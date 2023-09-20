import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const EstimateEmailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Token" source="token" />
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Expire Date" source="expireDate" />
        <BooleanInput
          label="Convert Accepted Estimates"
          source="convertAcceptedEstimates"
        />
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
      </SimpleForm>
    </Create>
  );
};
