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
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";

export const OrganizationProjectList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrganizationProjects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Billing" source="billing" />
        <TextField label="Currency" source="currency" />
        <BooleanField label="Public Field" source="publicField" />
        <TextField label="Owner" source="owner" />
        <TextField label="Task List Type" source="taskListType" />
        <TextField label="Code" source="code" />
        <TextField label="Description" source="description" />
        <TextField label="Color" source="color" />
        <BooleanField label="Billable" source="billable" />
        <BooleanField label="Billing Flat" source="billingFlat" />
        <BooleanField label="Open Source" source="openSource" />
        <TextField label="Project Url" source="projectUrl" />
        <TextField
          label="Open Source Project Url"
          source="openSourceProjectUrl"
        />
        <TextField label="Budget" source="budget" />
        <TextField label="Budget Type" source="budgetType" />
        <TextField label="Members Count" source="membersCount" />
        <TextField label="Image Url" source="imageUrl" />
        <ReferenceField
          label="Image Asset"
          source="imageasset.id"
          reference="ImageAsset"
        >
          <TextField source={IMAGEASSET_TITLE_FIELD} />
        </ReferenceField>
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
          label="Organization Contact"
          source="organizationcontact.id"
          reference="OrganizationContact"
        >
          <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
