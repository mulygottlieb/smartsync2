import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { TIMEOFFPOLICY_TITLE_FIELD } from "../timeOffPolicy/TimeOffPolicyTitle";

export const TimeOffRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TimeOffRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Document Url" source="documentUrl" />
        <TextField label="Description" source="description" />
        <TextField label="Start" source="start" />
        <TextField label="End" source="end" />
        <TextField label="Request Date" source="requestDate" />
        <TextField label="Status" source="status" />
        <BooleanField label="Is Holiday" source="isHoliday" />
        <BooleanField label="Is Archived" source="isArchived" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Image Asset"
          source="imageasset.id"
          reference="ImageAsset"
        >
          <TextField source={IMAGEASSET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Time Off Policy"
          source="timeoffpolicy.id"
          reference="TimeOffPolicy"
        >
          <TextField source={TIMEOFFPOLICY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
