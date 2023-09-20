import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { EquipmentSharingTitle } from "../equipmentSharing/EquipmentSharingTitle";
import { TagEquipmentTitle } from "../tagEquipment/TagEquipmentTitle";

export const EquipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Serial Number" source="serialNumber" />
        <NumberInput label="Manufactured Year" source="manufacturedYear" />
        <NumberInput label="Initial Cost" source="initialCost" />
        <TextInput label="Currency" source="currency" />
        <NumberInput label="Max Share Period" source="maxSharePeriod" />
        <BooleanInput label="Auto Approve Share" source="autoApproveShare" />
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
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="equipmentSharing"
          reference="EquipmentSharing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquipmentSharingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagEquipment"
          reference="TagEquipment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagEquipmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
