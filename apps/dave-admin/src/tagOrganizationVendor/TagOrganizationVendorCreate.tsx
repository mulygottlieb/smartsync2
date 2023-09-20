import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationVendorTitle } from "../organizationVendor/OrganizationVendorTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagOrganizationVendorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="organizationVendor.id"
          reference="OrganizationVendor"
          label="Organization Vendor"
        >
          <SelectInput optionText={OrganizationVendorTitle} />
        </ReferenceInput>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
