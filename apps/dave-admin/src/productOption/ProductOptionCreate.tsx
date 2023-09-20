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

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { ProductOptionGroupTitle } from "../productOptionGroup/ProductOptionGroupTitle";
import { ProductOptionTranslationTitle } from "../productOptionTranslation/ProductOptionTranslationTitle";
import { ProductVariantOptionsProductOptionTitle } from "../productVariantOptionsProductOption/ProductVariantOptionsProductOptionTitle";

export const ProductOptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Code" source="code" />
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
        <ReferenceInput
          source="productOptionGroup.id"
          reference="ProductOptionGroup"
          label="Product Option Group"
        >
          <SelectInput optionText={ProductOptionGroupTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="productOptionTranslation"
          reference="ProductOptionTranslation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductOptionTranslationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productVariantOptionsProductOption"
          reference="ProductVariantOptionsProductOption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput
            optionText={ProductVariantOptionsProductOptionTitle}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
