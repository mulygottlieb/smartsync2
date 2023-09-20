import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { REPORT_TITLE_FIELD } from "./ReportTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { REPORTCATEGORY_TITLE_FIELD } from "../reportCategory/ReportCategoryTitle";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Slug" source="slug" />
        <TextField label="Description" source="description" />
        <TextField label="Image" source="image" />
        <TextField label="Icon Class" source="iconClass" />
        <BooleanField label="Show In Menu" source="showInMenu" />
        <ReferenceField
          label="Report Category"
          source="reportcategory.id"
          reference="ReportCategory"
        >
          <TextField source={REPORTCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ReportOrganization"
          target="reportId"
          label="ReportOrganizations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="Is Enabled" source="isEnabled" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Report"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
