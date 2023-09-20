import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationDepartmentTitle } from "../organizationDepartment/OrganizationDepartmentTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";

export const CandidateDepartmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
