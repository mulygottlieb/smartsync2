import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { PRODUCTOPTION_TITLE_FIELD } from "./ProductOptionTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { PRODUCTOPTIONGROUP_TITLE_FIELD } from "../productOptionGroup/ProductOptionGroupTitle";

export const ProductOptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Code" source="code" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Option Group"
          source="productoptiongroup.id"
          reference="ProductOptionGroup"
        >
          <TextField source={PRODUCTOPTIONGROUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ProductOptionTranslation"
          target="referenceId"
          label="ProductOptionTranslations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Language Code" source="languageCode" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Option"
              source="productoption.id"
              reference="ProductOption"
            >
              <TextField source={PRODUCTOPTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductVariantOptionsProductOption"
          target="productOptionId"
          label="ProductVariantOptionsProductOptions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Product Variant"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Option"
              source="productoption.id"
              reference="ProductOption"
            >
              <TextField source={PRODUCTOPTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
