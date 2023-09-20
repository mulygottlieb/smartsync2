import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { ORGANIZATIONPOSITION_TITLE_FIELD } from "../organizationPosition/OrganizationPositionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CANDIDATESOURCE_TITLE_FIELD } from "../candidateSource/CandidateSourceTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";

export const CandidateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Candidates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Rating" source="rating" />
        <TextField label="Value Date" source="valueDate" />
        <TextField label="Applied Date" source="appliedDate" />
        <TextField label="Hired Date" source="hiredDate" />
        <TextField label="Status" source="status" />
        <TextField label="Reject Date" source="rejectDate" />
        <TextField label="Candidate Level" source="candidateLevel" />
        <TextField label="Re Weekly Limit" source="reWeeklyLimit" />
        <TextField label="Bill Rate Currency" source="billRateCurrency" />
        <TextField label="Bill Rate Value" source="billRateValue" />
        <TextField label="Pay Period" source="payPeriod" />
        <TextField label="Cv Url" source="cvUrl" />
        <BooleanField label="Is Archived" source="isArchived" />
        <TextField label="Minimum Billing Rate" source="minimumBillingRate" />
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Position"
          source="organizationposition.id"
          reference="OrganizationPosition"
        >
          <TextField source={ORGANIZATIONPOSITION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Candidate Source"
          source="candidatesource.id"
          reference="CandidateSource"
        >
          <TextField source={CANDIDATESOURCE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Contact" source="contact.id" reference="Contact">
          <TextField source={CONTACT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
