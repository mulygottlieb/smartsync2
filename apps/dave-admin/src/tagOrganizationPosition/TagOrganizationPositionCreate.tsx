import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationPositionTitle } from "../organizationPosition/OrganizationPositionTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagOrganizationPositionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="organizationPosition.id"
          reference="OrganizationPosition"
          label="Organization Position"
        >
          <SelectInput optionText={OrganizationPositionTitle} />
        </ReferenceInput>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
