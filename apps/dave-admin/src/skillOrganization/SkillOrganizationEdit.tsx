import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SkillTitle } from "../skill/SkillTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const SkillOrganizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="skill.id" reference="Skill" label="Skill">
          <SelectInput optionText={SkillTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
