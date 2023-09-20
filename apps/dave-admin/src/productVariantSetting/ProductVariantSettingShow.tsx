import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const ProductVariantSettingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="Is Subscription" source="isSubscription" />
        <BooleanField
          label="Is Purchase Automatically"
          source="isPurchaseAutomatically"
        />
        <BooleanField label="Can Be Sold" source="canBeSold" />
        <BooleanField label="Can Be Purchased" source="canBePurchased" />
        <BooleanField label="Can Be Charged" source="canBeCharged" />
        <BooleanField label="Can Be Rented" source="canBeRented" />
        <BooleanField label="Is Equipment" source="isEquipment" />
        <BooleanField label="Track Inventory" source="trackInventory" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Variant Product Variant Setting Product Variant Id Toproduct Variant"
          source="productvariant.id"
          reference="ProductVariant"
        >
          <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Product Variant Product Variant Setting Id Toproduct Variant Setting"
          source="productvariant.id"
          reference="ProductVariant"
        >
          <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
