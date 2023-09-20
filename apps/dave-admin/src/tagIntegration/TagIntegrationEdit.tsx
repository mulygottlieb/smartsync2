import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TagTitle } from "../tag/TagTitle";
import { IntegrationTitle } from "../integration/IntegrationTitle";

export const TagIntegrationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="integration.id"
          reference="Integration"
          label="Integration"
        >
          <SelectInput optionText={IntegrationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
