import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { ORGANIZATIONDEPARTMENT_TITLE_FIELD } from "../organizationDepartment/OrganizationDepartmentTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";

export const CandidateDepartmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Organization Department"
          source="organizationdepartment.id"
          reference="OrganizationDepartment"
        >
          <TextField source={ORGANIZATIONDEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
