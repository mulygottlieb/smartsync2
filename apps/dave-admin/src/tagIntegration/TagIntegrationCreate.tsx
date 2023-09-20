import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TagTitle } from "../tag/TagTitle";
import { IntegrationTitle } from "../integration/IntegrationTitle";

export const TagIntegrationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
