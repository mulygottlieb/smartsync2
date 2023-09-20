import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD } from "../organizationEmploymentType/OrganizationEmploymentTypeTitle";

export const CandidateEmploymentTypeList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CandidateEmploymentTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Employment Type"
          source="organizationemploymenttype.id"
          reference="OrganizationEmploymentType"
        >
          <TextField source={ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
