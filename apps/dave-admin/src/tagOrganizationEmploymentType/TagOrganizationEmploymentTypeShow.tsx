import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD } from "../organizationEmploymentType/OrganizationEmploymentTypeTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";

export const TagOrganizationEmploymentTypeShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Organization Employment Type"
          source="organizationemploymenttype.id"
          reference="OrganizationEmploymentType"
        >
          <TextField source={ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tag" source="tag.id" reference="Tag">
          <TextField source={TAG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
