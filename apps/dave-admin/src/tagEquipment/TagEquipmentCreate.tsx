import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TagTitle } from "../tag/TagTitle";
import { EquipmentTitle } from "../equipment/EquipmentTitle";

export const TagEquipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
