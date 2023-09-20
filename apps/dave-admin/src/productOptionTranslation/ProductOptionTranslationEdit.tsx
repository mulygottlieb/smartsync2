import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { ProductOptionTitle } from "../productOption/ProductOptionTitle";

export const ProductOptionTranslationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" source="description" />
        <TextInput label="Language Code" source="languageCode" />
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
          source="productOption.id"
          reference="ProductOption"
          label="Product Option"
        >
          <SelectInput optionText={ProductOptionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
