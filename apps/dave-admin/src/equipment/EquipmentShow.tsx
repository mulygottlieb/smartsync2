import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EQUIPMENTSHARINGPOLICY_TITLE_FIELD } from "../equipmentSharingPolicy/EquipmentSharingPolicyTitle";
import { EQUIPMENT_TITLE_FIELD } from "./EquipmentTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";

export const EquipmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Serial Number" source="serialNumber" />
        <TextField label="Manufactured Year" source="manufacturedYear" />
        <TextField label="Initial Cost" source="initialCost" />
        <TextField label="Currency" source="currency" />
        <TextField label="Max Share Period" source="maxSharePeriod" />
        <BooleanField label="Auto Approve Share" source="autoApproveShare" />
        <ReferenceField
          label="Image Asset"
          source="imageasset.id"
          reference="ImageAsset"
        >
          <TextField source={IMAGEASSET_TITLE_FIELD} />
        </ReferenceField>
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
        <ReferenceManyField
          reference="EquipmentSharing"
          target="equipmentId"
          label="EquipmentSharings"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Share Request Day" source="shareRequestDay" />
            <TextField label="Share Start Day" source="shareStartDay" />
            <TextField label="Share End Day" source="shareEndDay" />
            <TextField label="Status" source="status" />
            <TextField label="Created By" source="createdBy" />
            <TextField label="Created By Name" source="createdByName" />
            <ReferenceField
              label="Equipment Sharing Policy"
              source="equipmentsharingpolicy.id"
              reference="EquipmentSharingPolicy"
            >
              <TextField source={EQUIPMENTSHARINGPOLICY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Equipment"
              source="equipment.id"
              reference="Equipment"
            >
              <TextField source={EQUIPMENT_TITLE_FIELD} />
            </ReferenceField>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagEquipment"
          target="equipmentId"
          label="TagEquipments"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Equipment"
              source="equipment.id"
              reference="Equipment"
            >
              <TextField source={EQUIPMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
