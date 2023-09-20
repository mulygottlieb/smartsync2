import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EQUIPMENTSHARINGPOLICY_TITLE_FIELD } from "../equipmentSharingPolicy/EquipmentSharingPolicyTitle";
import { EQUIPMENT_TITLE_FIELD } from "../equipment/EquipmentTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const EquipmentSharingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EquipmentSharings"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
