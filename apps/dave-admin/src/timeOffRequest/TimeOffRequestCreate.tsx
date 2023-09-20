import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { TimeOffPolicyTitle } from "../timeOffPolicy/TimeOffPolicyTitle";
import { TimeOffRequestEmployeeTitle } from "../timeOffRequestEmployee/TimeOffRequestEmployeeTitle";

export const TimeOffRequestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Document Url" source="documentUrl" />
        <TextInput label="Description" source="description" />
        <DateTimeInput label="Start" source="start" />
        <DateTimeInput label="End" source="end" />
        <DateTimeInput label="Request Date" source="requestDate" />
        <TextInput label="Status" source="status" />
        <BooleanInput label="Is Holiday" source="isHoliday" />
        <BooleanInput label="Is Archived" source="isArchived" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="imageAsset.id"
          reference="ImageAsset"
          label="Image Asset"
        >
          <SelectInput optionText={ImageAssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="timeOffPolicy.id"
          reference="TimeOffPolicy"
          label="Time Off Policy"
        >
          <SelectInput optionText={TimeOffPolicyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="timeOffRequestEmployee"
          reference="TimeOffRequestEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeOffRequestEmployeeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
