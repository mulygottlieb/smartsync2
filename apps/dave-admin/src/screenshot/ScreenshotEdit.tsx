import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";

export const ScreenshotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="File" source="file" />
        <TextInput label="Thumb" source="thumb" />
        <DateTimeInput label="Recorded At" source="recordedAt" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <SelectInput
          source="storageProvider"
          label="Storage Provider"
          choices={[
            { label: "LOCAL", value: "LOCAL" },
            { label: "S3", value: "S3" },
            { label: "WASABI", value: "WASABI" },
            { label: "CLOUDINARY", value: "CLOUDINARY" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="timeSlot.id"
          reference="TimeSlot"
          label="Time Slot"
        >
          <SelectInput optionText={TimeSlotTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
