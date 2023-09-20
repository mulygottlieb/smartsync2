import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { EquipmentSharingTitle } from "../equipmentSharing/EquipmentSharingTitle";

export const EquipmentSharesEmployeeEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
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
