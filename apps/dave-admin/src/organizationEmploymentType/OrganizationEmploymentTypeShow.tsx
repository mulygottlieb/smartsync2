import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD } from "./OrganizationEmploymentTypeTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const OrganizationEmploymentTypeShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="CandidateEmploymentType"
          target="organizationEmploymentTypeId"
          label="CandidateEmploymentTypes"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationEmploymentTypeEmployee"
          target="organizationEmploymentTypeId"
          label="OrganizationEmploymentTypeEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Employment Type"
              source="organizationemploymenttype.id"
              reference="OrganizationEmploymentType"
            >
              <TextField source={ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationEmploymentType"
          target="organizationEmploymentTypeId"
          label="TagOrganizationEmploymentTypes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Employment Type"
              source="organizationemploymenttype.id"
              reference="OrganizationEmploymentType"
            >
              <TextField source={ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
