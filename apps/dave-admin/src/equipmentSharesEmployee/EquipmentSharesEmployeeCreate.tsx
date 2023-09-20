import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { EquipmentSharingTitle } from "../equipmentSharing/EquipmentSharingTitle";

export const EquipmentSharesEmployeeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
