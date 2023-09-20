import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INTEGRATION_TITLE_FIELD } from "../integration/IntegrationTitle";
import { INTEGRATIONTYPE_TITLE_FIELD } from "./IntegrationTypeTitle";

export const IntegrationTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Group Name" source="groupName" />
        <TextField label="Order" source="order" />
        <ReferenceManyField
          reference="IntegrationIntegrationType"
          target="integrationTypeId"
          label="IntegrationIntegrationTypes"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
