import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FeatureTitle } from "./FeatureTitle";
import { FeatureOrganizationTitle } from "../featureOrganization/FeatureOrganizationTitle";

export const FeatureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Code" source="code" />
        <BooleanInput label="Is Paid" source="isPaid" />
        <TextInput label="Description" source="description" />
        <TextInput label="Image" source="image" />
        <TextInput label="Link" source="link" />
        <TextInput label="Status" source="status" />
        <TextInput label="Icon" source="icon" />
        <ReferenceInput source="feature.id" reference="Feature" label="Feature">
          <SelectInput optionText={FeatureTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="otherFeature"
          reference="Feature"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeatureTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="featureOrganization"
          reference="FeatureOrganization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeatureOrganizationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
