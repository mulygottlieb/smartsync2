import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CANDIDATEINTERVIEW_TITLE_FIELD } from "../candidateInterview/CandidateInterviewTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { CANDIDATEINTERVIEWER_TITLE_FIELD } from "../candidateInterviewer/CandidateInterviewerTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";

export const CandidateFeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CandidateFeedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Description" source="description" />
        <TextField label="Rating" source="rating" />
        <TextField label="Status" source="status" />
        <ReferenceField
          label="Candidate Interview"
          source="candidateinterview.id"
          reference="CandidateInterview"
        >
          <TextField source={CANDIDATEINTERVIEW_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Candidate Interviewer"
          source="candidateinterviewer.id"
          reference="CandidateInterviewer"
        >
          <TextField source={CANDIDATEINTERVIEWER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
