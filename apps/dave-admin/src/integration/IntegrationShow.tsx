import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INTEGRATION_TITLE_FIELD } from "./IntegrationTitle";
import { INTEGRATIONTYPE_TITLE_FIELD } from "../integrationType/IntegrationTypeTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const IntegrationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Img Src" source="imgSrc" />
        <BooleanField label="Is Coming Soon" source="isComingSoon" />
        <BooleanField label="Is Paid" source="isPaid" />
        <TextField label="Version" source="version" />
        <TextField label="Doc Url" source="docUrl" />
        <BooleanField label="Is Free Trial" source="isFreeTrial" />
        <TextField label="Free Trial Period" source="freeTrialPeriod" />
        <TextField label="Order" source="order" />
        <ReferenceManyField
          reference="IntegrationIntegrationType"
          target="integrationId"
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
        <ReferenceManyField
          reference="TagIntegration"
          target="integrationId"
          label="TagIntegrations"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Integration"
              source="integration.id"
              reference="Integration"
            >
              <TextField source={INTEGRATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
