import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationDepartmentTitle } from "../organizationDepartment/OrganizationDepartmentTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";

export const CandidateDepartmentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="organizationDepartment.id"
          reference="OrganizationDepartment"
          label="Organization Department"
        >
          <SelectInput optionText={OrganizationDepartmentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
