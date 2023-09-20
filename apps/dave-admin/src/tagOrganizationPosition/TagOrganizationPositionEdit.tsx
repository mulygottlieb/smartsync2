import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationPositionTitle } from "../organizationPosition/OrganizationPositionTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagOrganizationPositionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
