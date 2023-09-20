import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { INTEGRATION_TITLE_FIELD } from "../integration/IntegrationTitle";
import { INTEGRATIONTYPE_TITLE_FIELD } from "../integrationType/IntegrationTypeTitle";

export const IntegrationIntegrationTypeShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Integration"
          source="integration.id"
          reference="Integration"
        >
          <TextField source={INTEGRATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Integration Type"
          source="integrationtype.id"
          reference="IntegrationType"
        >
          <TextField source={INTEGRATIONTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
