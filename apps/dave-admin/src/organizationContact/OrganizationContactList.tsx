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
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { DEAL_TITLE_FIELD } from "../deal/DealTitle";

export const OrganizationContactList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrganizationContacts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Primary Email" source="primaryEmail" />
        <TextField label="Primary Phone" source="primaryPhone" />
        <TextField label="Notes" source="notes" />
        <TextField label="Image Url" source="imageUrl" />
        <TextField label="Budget" source="budget" />
        <TextField label="Created By" source="createdBy" />
        <TextField label="Invite Status" source="inviteStatus" />
        <TextField label="Contact Type" source="contactType" />
        <TextField label="Budget Type" source="budgetType" />
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
        <ReferenceField label="Contact" source="contact.id" reference="Contact">
          <TextField source={CONTACT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Deal" source="deal.id" reference="Deal">
          <TextField source={DEAL_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
