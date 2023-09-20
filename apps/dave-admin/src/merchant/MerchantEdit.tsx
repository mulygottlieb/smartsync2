import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { TagMerchantTitle } from "../tagMerchant/TagMerchantTitle";
import { WarehouseMerchantTitle } from "../warehouseMerchant/WarehouseMerchantTitle";

export const MerchantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Code" source="code" />
        <TextInput label="Email" source="email" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Description" source="description" />
        <BooleanInput label="Active" source="active" />
        <TextInput label="Currency" source="currency" />
        <ReferenceInput
          source="imageAsset.id"
          reference="ImageAsset"
          label="Image Asset"
        >
          <SelectInput optionText={ImageAssetTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="tagMerchant"
          reference="TagMerchant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagMerchantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="warehouseMerchant"
          reference="WarehouseMerchant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WarehouseMerchantTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
