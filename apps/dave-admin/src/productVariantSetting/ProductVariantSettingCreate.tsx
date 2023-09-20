import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TenantTitle } from "../tenant/TenantTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const ProductVariantSettingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Is Subscription" source="isSubscription" />
        <BooleanInput
          label="Is Purchase Automatically"
          source="isPurchaseAutomatically"
        />
        <BooleanInput label="Can Be Sold" source="canBeSold" />
        <BooleanInput label="Can Be Purchased" source="canBePurchased" />
        <BooleanInput label="Can Be Charged" source="canBeCharged" />
        <BooleanInput label="Can Be Rented" source="canBeRented" />
        <BooleanInput label="Is Equipment" source="isEquipment" />
        <BooleanInput label="Track Inventory" source="trackInventory" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productVariantProductVariantSettingProductVariantIdToproductVariant.id"
          reference="ProductVariant"
          label="Product Variant Product Variant Setting Product Variant Id Toproduct Variant"
        >
          <SelectInput optionText={ProductVariantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="productVariantProductVariantSettingIdToproductVariantSetting.id"
          reference="ProductVariant"
          label="Product Variant Product Variant Setting Id Toproduct Variant Setting"
        >
          <SelectInput optionText={ProductVariantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
