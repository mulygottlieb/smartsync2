import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { EquipmentSharingTitle } from "../equipmentSharing/EquipmentSharingTitle";

export const EquipmentSharesTeamCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="organizationTeam.id"
          reference="OrganizationTeam"
          label="Organization Team"
        >
          <SelectInput optionText={OrganizationTeamTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="equipmentSharing.id"
          reference="EquipmentSharing"
          label="Equipment Sharing"
        >
          <SelectInput optionText={EquipmentSharingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
