import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { MerchantTitle } from "../merchant/MerchantTitle";
import { OrganizationContactTitle } from "../organizationContact/OrganizationContactTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";

export const ContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Country" source="country" />
        <TextInput label="City" source="city" />
        <TextInput label="Address" source="address" />
        <TextInput label="Address2" source="address2" />
        <TextInput label="Postcode" source="postcode" />
        <TextInput label="Region Code" source="regionCode" />
        <TextInput label="Fax" source="fax" />
        <TextInput label="Fiscal Information" source="fiscalInformation" />
        <TextInput label="Website" source="website" />
        <NumberInput label="Latitude" source="latitude" />
        <NumberInput label="Longitude" source="longitude" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationContactOrganizationIdToorganization.id"
          reference="Organization"
          label="Organization Contact Organization Id Toorganization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="organizationOrganizationContactIdTocontact"
          reference="Organization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="merchant.id"
          reference="Merchant"
          label="Merchant"
        >
          <SelectInput optionText={MerchantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationContact.id"
          reference="OrganizationContact"
          label="Organization Contact"
        >
          <SelectInput optionText={OrganizationContactTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="warehouse.id"
          reference="Warehouse"
          label="Warehouse"
        >
          <SelectInput optionText={WarehouseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
