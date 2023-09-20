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

import { ORGANIZATIONDEPARTMENT_TITLE_FIELD } from "./OrganizationDepartmentTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { INVITE_TITLE_FIELD } from "../invite/InviteTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const OrganizationDepartmentShow = (
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
          reference="CandidateDepartment"
          target="organizationDepartmentId"
          label="CandidateDepartments"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InviteOrganizationDepartment"
          target="organizationDepartmentId"
          label="InviteOrganizationDepartments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Invite"
              source="invite.id"
              reference="Invite"
            >
              <TextField source={INVITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Department"
              source="organizationdepartment.id"
              reference="OrganizationDepartment"
            >
              <TextField source={ORGANIZATIONDEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationDepartmentEmployee"
          target="organizationDepartmentId"
          label="OrganizationDepartmentEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Department"
              source="organizationdepartment.id"
              reference="OrganizationDepartment"
            >
              <TextField source={ORGANIZATIONDEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationDepartment"
          target="organizationDepartmentId"
          label="TagOrganizationDepartments"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Department"
              source="organizationdepartment.id"
              reference="OrganizationDepartment"
            >
              <TextField source={ORGANIZATIONDEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
