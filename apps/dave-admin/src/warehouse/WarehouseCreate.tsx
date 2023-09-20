import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ContactTitle } from "../contact/ContactTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TagWarehouseTitle } from "../tagWarehouse/TagWarehouseTitle";
import { WarehouseMerchantTitle } from "../warehouseMerchant/WarehouseMerchantTitle";
import { WarehouseProductTitle } from "../warehouseProduct/WarehouseProductTitle";

export const WarehouseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Code" source="code" />
        <TextInput label="Email" source="email" />
        <TextInput label="Description" source="description" />
        <BooleanInput label="Active" source="active" />
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="imageAsset.id"
          reference="ImageAsset"
          label="Image Asset"
        >
          <SelectInput optionText={ImageAssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="tagWarehouse"
          reference="TagWarehouse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagWarehouseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="warehouseMerchant"
          reference="WarehouseMerchant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WarehouseMerchantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="warehouseProduct"
          reference="WarehouseProduct"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WarehouseProductTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
