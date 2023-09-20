import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { IntegrationTenantTitle } from "../integrationTenant/IntegrationTenantTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const IntegrationMapEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Entity" source="entity" />
        <NumberInput step={1} label="Source Id" source="sourceId" />
        <TextInput label="Gauzy Id" source="gauzyId" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="integrationTenant.id"
          reference="IntegrationTenant"
          label="Integration Tenant"
        >
          <SelectInput optionText={IntegrationTenantTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
