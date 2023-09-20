import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";

export const ScreenshotList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Screenshots"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="File" source="file" />
        <TextField label="Thumb" source="thumb" />
        <TextField label="Recorded At" source="recordedAt" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Storage Provider" source="storageProvider" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Time Slot"
          source="timeslot.id"
          reference="TimeSlot"
        >
          <TextField source={TIMESLOT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
