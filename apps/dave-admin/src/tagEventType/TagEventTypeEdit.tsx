import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagEventTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
