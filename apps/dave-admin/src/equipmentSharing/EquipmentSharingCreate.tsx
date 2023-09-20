import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EquipmentSharingPolicyTitle } from "../equipmentSharingPolicy/EquipmentSharingPolicyTitle";
import { EquipmentTitle } from "../equipment/EquipmentTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { EquipmentSharesEmployeeTitle } from "../equipmentSharesEmployee/EquipmentSharesEmployeeTitle";
import { EquipmentSharesTeamTitle } from "../equipmentSharesTeam/EquipmentSharesTeamTitle";

export const EquipmentSharingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Share Request Day" source="shareRequestDay" />
        <DateTimeInput label="Share Start Day" source="shareStartDay" />
        <DateTimeInput label="Share End Day" source="shareEndDay" />
        <NumberInput step={1} label="Status" source="status" />
        <TextInput label="Created By" source="createdBy" />
        <TextInput label="Created By Name" source="createdByName" />
        <ReferenceInput
          source="equipmentSharingPolicy.id"
          reference="EquipmentSharingPolicy"
          label="Equipment Sharing Policy"
        >
          <SelectInput optionText={EquipmentSharingPolicyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="equipment.id"
          reference="Equipment"
          label="Equipment"
        >
          <SelectInput optionText={EquipmentTitle} />
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
          source="equipmentSharesEmployees"
          reference="EquipmentSharesEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquipmentSharesEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="equipmentSharesTeams"
          reference="EquipmentSharesTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquipmentSharesTeamTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
