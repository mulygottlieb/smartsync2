import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INTEGRATION_TITLE_FIELD } from "../integration/IntegrationTitle";
import { INTEGRATIONTYPE_TITLE_FIELD } from "../integrationType/IntegrationTypeTitle";

export const IntegrationIntegrationTypeList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"IntegrationIntegrationTypes"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
