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
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { WAREHOUSE_TITLE_FIELD } from "../warehouse/WarehouseTitle";

export const ContactList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Contacts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Country" source="country" />
        <TextField label="City" source="city" />
        <TextField label="Address" source="address" />
        <TextField label="Address2" source="address2" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="Region Code" source="regionCode" />
        <TextField label="Fax" source="fax" />
        <TextField label="Fiscal Information" source="fiscalInformation" />
        <TextField label="Website" source="website" />
        <TextField label="Latitude" source="latitude" />
        <TextField label="Longitude" source="longitude" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Contact Organization Id Toorganization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Merchant"
          source="merchant.id"
          reference="Merchant"
        >
          <TextField source={MERCHANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Contact"
          source="organizationcontact.id"
          reference="OrganizationContact"
        >
          <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Warehouse"
          source="warehouse.id"
          reference="Warehouse"
        >
          <TextField source={WAREHOUSE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
