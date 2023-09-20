import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { EquipmentSharingTitle } from "../equipmentSharing/EquipmentSharingTitle";

export const EquipmentSharesTeamEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
