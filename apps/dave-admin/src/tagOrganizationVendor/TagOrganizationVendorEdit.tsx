import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationVendorTitle } from "../organizationVendor/OrganizationVendorTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagOrganizationVendorEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
