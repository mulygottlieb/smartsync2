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

export const ImageAssetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ImageAssets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Url" source="url" />
        <TextField label="Width" source="width" />
        <TextField label="Height" source="height" />
        <BooleanField label="Is Featured" source="isFeatured" />
        <TextField label="Thumb" source="thumb" />
        <TextField label="Size" source="size" />
        <TextField label="External Provider Id" source="externalProviderId" />
        <TextField label="Storage Provider" source="storageProvider" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceField
          label="Tenant Image Asset Tenant Id Totenant"
          source="tenant.id"
          reference="Tenant"
        >
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Image Asset Organization Id Toorganization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
