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

import { ReportCategoryTitle } from "../reportCategory/ReportCategoryTitle";
import { ReportOrganizationTitle } from "../reportOrganization/ReportOrganizationTitle";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Description" source="description" />
        <TextInput label="Image" source="image" />
        <TextInput label="Icon Class" source="iconClass" />
        <BooleanInput label="Show In Menu" source="showInMenu" />
        <ReferenceInput
          source="reportCategory.id"
          reference="ReportCategory"
          label="Report Category"
        >
          <SelectInput optionText={ReportCategoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="reportOrganization"
          reference="ReportOrganization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportOrganizationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
