import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TagTitle } from "../tag/TagTitle";
import { EquipmentTitle } from "../equipment/EquipmentTitle";

export const TagEquipmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="equipment.id"
          reference="Equipment"
          label="Equipment"
        >
          <SelectInput optionText={EquipmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
