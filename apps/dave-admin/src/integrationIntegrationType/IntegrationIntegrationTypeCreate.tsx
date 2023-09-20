import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IntegrationTitle } from "../integration/IntegrationTitle";
import { IntegrationTypeTitle } from "../integrationType/IntegrationTypeTitle";

export const IntegrationIntegrationTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="integration.id"
          reference="Integration"
          label="Integration"
        >
          <SelectInput optionText={IntegrationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="integrationType.id"
          reference="IntegrationType"
          label="Integration Type"
        >
          <SelectInput optionText={IntegrationTypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
