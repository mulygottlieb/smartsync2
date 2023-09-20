import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { EQUIPMENTSHARING_TITLE_FIELD } from "./EquipmentSharingTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { EQUIPMENTSHARINGPOLICY_TITLE_FIELD } from "../equipmentSharingPolicy/EquipmentSharingPolicyTitle";
import { EQUIPMENT_TITLE_FIELD } from "../equipment/EquipmentTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const EquipmentSharingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="EquipmentSharesEmployee"
          target="equipmentSharingId"
          label="EquipmentSharesEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Equipment Sharing"
              source="equipmentsharing.id"
              reference="EquipmentSharing"
            >
              <TextField source={EQUIPMENTSHARING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EquipmentSharesTeam"
          target="equipmentSharingId"
          label="EquipmentSharesTeams"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Equipment Sharing"
              source="equipmentsharing.id"
              reference="EquipmentSharing"
            >
              <TextField source={EQUIPMENTSHARING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
