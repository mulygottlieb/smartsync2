import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { ORGANIZATIONPOSITION_TITLE_FIELD } from "../organizationPosition/OrganizationPositionTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EmployeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Employees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="End Work" source="endWork" />
        <TextField label="Facebook Url" source="facebookUrl" />
        <TextField label="Github Url" source="githubUrl" />
        <TextField label="Gitlab Url" source="gitlabUrl" />
        <TextField label="Id" source="id" />
        <TextField label="Instagram Url" source="instagramUrl" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Away" source="isAway" />
        <BooleanField label="Is Job Search Active" source="isJobSearchActive" />
        <BooleanField label="Is Online" source="isOnline" />
        <BooleanField label="Is Tracking Enabled" source="isTrackingEnabled" />
        <BooleanField label="Is Tracking Time" source="isTrackingTime" />
        <BooleanField label="Is Verified" source="isVerified" />
        <BooleanField label="Is Vetted" source="isVetted" />
        <TextField label="Job Success" source="jobSuccess" />
        <TextField label="Accept Date" source="acceptDate" />
        <BooleanField
          label="Allow Screenshot Capture"
          source="allowScreenshotCapture"
        />
        <BooleanField label="Anonymous Bonus" source="anonymousBonus" />
        <TextField label="Average Bonus" source="averageBonus" />
        <TextField label="Average Expenses" source="averageExpenses" />
        <TextField label="Average Income" source="averageIncome" />
        <TextField label="Bill Rate Currency" source="billRateCurrency" />
        <TextField label="Bill Rate Value" source="billRateValue" />
        <ReferenceField
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Contact" source="contact.id" reference="Contact">
          <TextField source={CONTACT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Description" source="description" />
        <TextField label="Employee Level" source="employeeLevel" />
        <TextField label="Linked In Id" source="linkedInId" />
        <TextField label="Linked In Url" source="linkedInUrl" />
        <TextField label="Minimum Billing Rate" source="minimumBillingRate" />
        <TextField label="Offer Date" source="offerDate" />
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
        <TextField label="Pay Period" source="payPeriod" />
        <TextField label="Profile Link" source="profileLink" />
        <TextField label="Reject Date" source="rejectDate" />
        <TextField label="Re Weekly Limit" source="reWeeklyLimit" />
        <TextField label="Short Description" source="shortDescription" />
        <BooleanField
          label="Show Anonymous Bonus"
          source="showAnonymousBonus"
        />
        <BooleanField label="Show Average Bonus" source="showAverageBonus" />
        <BooleanField
          label="Show Average Expenses"
          source="showAverageExpenses"
        />
        <BooleanField label="Show Average Income" source="showAverageIncome" />
        <BooleanField label="Show Billrate" source="showBillrate" />
        <BooleanField label="Show Payperiod" source="showPayperiod" />
        <BooleanField label="Show Start Work On" source="showStartWorkOn" />
        <TextField label="Stackoverflow Url" source="stackoverflowUrl" />
        <TextField label="Started Work On" source="startedWorkOn" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Total Jobs" source="totalJobs" />
        <TextField label="Total Work Hours" source="totalWorkHours" />
        <TextField label="Twitter Url" source="twitterUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Upwork Id" source="upworkId" />
        <TextField label="Upwork Url" source="upworkUrl" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Value Date" source="valueDate" />
      </Datagrid>
    </List>
  );
};
