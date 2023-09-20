import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { IntegrationTitle } from "../integration/IntegrationTitle";
import { IntegrationTypeTitle } from "../integrationType/IntegrationTypeTitle";

export const IntegrationIntegrationTypeEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
