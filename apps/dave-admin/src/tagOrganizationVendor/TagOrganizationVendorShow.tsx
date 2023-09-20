import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { ORGANIZATIONVENDOR_TITLE_FIELD } from "../organizationVendor/OrganizationVendorTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const TagOrganizationVendorShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Organization Vendor"
          source="organizationvendor.id"
          reference="OrganizationVendor"
        >
          <TextField source={ORGANIZATIONVENDOR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
