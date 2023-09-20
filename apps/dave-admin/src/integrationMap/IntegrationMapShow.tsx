import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { INTEGRATIONTENANT_TITLE_FIELD } from "../integrationTenant/IntegrationTenantTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const IntegrationMapShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Entity" source="entity" />
        <TextField label="Source Id" source="sourceId" />
        <TextField label="Gauzy Id" source="gauzyId" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Integration Tenant"
          source="integrationtenant.id"
          reference="IntegrationTenant"
        >
          <TextField source={INTEGRATIONTENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
