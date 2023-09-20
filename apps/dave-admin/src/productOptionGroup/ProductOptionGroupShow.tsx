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
import { PRODUCTOPTIONGROUP_TITLE_FIELD } from "./ProductOptionGroupTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProductOptionGroupShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ProductOption"
          target="groupId"
          label="ProductOptions"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Option Group"
              source="productoptiongroup.id"
              reference="ProductOptionGroup"
            >
              <TextField source={PRODUCTOPTIONGROUP_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductOptionGroupTranslation"
          target="referenceId"
          label="ProductOptionGroupTranslations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Language Code" source="languageCode" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Option Group"
              source="productoptiongroup.id"
              reference="ProductOptionGroup"
            >
              <TextField source={PRODUCTOPTIONGROUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
