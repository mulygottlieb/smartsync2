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
  BooleanField,
} from "react-admin";

import { CONTACT_TITLE_FIELD } from "./ContactTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { WAREHOUSE_TITLE_FIELD } from "../warehouse/WarehouseTitle";

export const ContactShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Country" source="country" />
        <TextField label="City" source="city" />
        <TextField label="Address" source="address" />
        <TextField label="Address2" source="address2" />
        <TextField label="Postcode" source="postcode" />
        <TextField label="Region Code" source="regionCode" />
        <TextField label="Fax" source="fax" />
        <TextField label="Fiscal Information" source="fiscalInformation" />
        <TextField label="Website" source="website" />
        <TextField label="Latitude" source="latitude" />
        <TextField label="Longitude" source="longitude" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Contact Organization Id Toorganization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Merchant"
          source="merchant.id"
          reference="Merchant"
        >
          <TextField source={MERCHANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Contact"
          source="organizationcontact.id"
          reference="OrganizationContact"
        >
          <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Warehouse"
          source="warehouse.id"
          reference="Warehouse"
        >
          <TextField source={WAREHOUSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Organization"
          target="contactOrganizationContactIdTocontactId"
          label="Organizations"
        >
          <Datagrid rowClick="show">
            <TextField
              label="Activity Proof Duration"
              source="activityProofDuration"
            />
            <BooleanField label="Allow Delete Time" source="allowDeleteTime" />
            <BooleanField label="Allow Manual Time" source="allowManualTime" />
            <BooleanField label="Allow Modify Time" source="allowModifyTime" />
            <BooleanField
              label="Allow Screenshot Capture"
              source="allowScreenshotCapture"
            />
            <BooleanField
              label="Allow Track Inactivity"
              source="allowTrackInactivity"
            />
            <TextField label="Banner" source="banner" />
            <TextField label="Bonus Percentage" source="bonusPercentage" />
            <TextField label="Bonus Type" source="bonusType" />
            <TextField label="Brand Color" source="brandColor" />
            <TextField label="Client Focus" source="clientFocus" />
            <ReferenceField
              label="Contact Organization Contact Id Tocontact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField
              label="Convert Accepted Estimates"
              source="convertAcceptedEstimates"
            />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency" source="currency" />
            <TextField label="Currency Position" source="currencyPosition" />
            <TextField label="Date Format" source="dateFormat" />
            <TextField label="Days Until Due" source="daysUntilDue" />
            <TextField
              label="Default Alignment Type"
              source="defaultAlignmentType"
            />
            <TextField label="Default End Time" source="defaultEndTime" />
            <TextField
              label="Default Invoice Estimate Terms"
              source="defaultInvoiceEstimateTerms"
            />
            <TextField label="Default Start Time" source="defaultStartTime" />
            <TextField
              label="Default Value Date Type"
              source="defaultValueDateType"
            />
            <BooleanField
              label="Discount After Tax"
              source="discountAfterTax"
            />
            <TextField label="Fiscal End Date" source="fiscalEndDate" />
            <TextField label="Fiscal Information" source="fiscalInformation" />
            <TextField label="Fiscal Start Date" source="fiscalStartDate" />
            <BooleanField
              label="Future Date Allowed"
              source="futureDateAllowed"
            />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Image Asset Organization Image Id Toimage Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Image Url" source="imageUrl" />
            <TextField
              label="Inactivity Time Limit"
              source="inactivityTimeLimit"
            />
            <TextField
              label="Invite Expiry Period"
              source="inviteExpiryPeriod"
            />
            <BooleanField label="Invites Allowed" source="invitesAllowed" />
            <BooleanField label="Is Active" source="isActive" />
            <BooleanField label="Is Default" source="isDefault" />
            <BooleanField
              label="Is Remove Idle Time"
              source="isRemoveIdleTime"
            />
            <TextField
              label="Minimum Project Size"
              source="minimumProjectSize"
            />
            <TextField label="Name" source="name" />
            <TextField label="Number Format" source="numberFormat" />
            <TextField label="Official Name" source="officialName" />
            <TextField label="Overview" source="overview" />
            <TextField label="Profile Link" source="profileLink" />
            <TextField label="Region Code" source="regionCode" />
            <TextField label="Registration Date" source="registrationDate" />
            <BooleanField label="Require Client" source="requireClient" />
            <BooleanField
              label="Require Description"
              source="requireDescription"
            />
            <BooleanField label="Require Project" source="requireProject" />
            <BooleanField label="Require Reason" source="requireReason" />
            <BooleanField label="Require Task" source="requireTask" />
            <BooleanField
              label="Separate Invoice Item Tax And Discount"
              source="separateInvoiceItemTaxAndDiscount"
            />
            <TextField label="Short Description" source="shortDescription" />
            <BooleanField label="Show Bonuses Paid" source="showBonusesPaid" />
            <BooleanField label="Show Clients" source="showClients" />
            <BooleanField
              label="Show Clients Count"
              source="showClientsCount"
            />
            <BooleanField
              label="Show Employees Count"
              source="showEmployeesCount"
            />
            <BooleanField label="Show Income" source="showIncome" />
            <BooleanField
              label="Show Minimum Project Size"
              source="showMinimumProjectSize"
            />
            <BooleanField label="Show Profits" source="showProfits" />
            <BooleanField
              label="Show Projects Count"
              source="showProjectsCount"
            />
            <BooleanField label="Show Total Hours" source="showTotalHours" />
            <TextField label="Start Week On" source="startWeekOn" />
            <TextField label="Tax Id" source="taxId" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Time Format" source="timeFormat" />
            <TextField label="Time Zone" source="timeZone" />
            <TextField label="Total Employees" source="totalEmployees" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField
              label="Upwork Organization Id"
              source="upworkOrganizationId"
            />
            <TextField label="Value Date" source="valueDate" />
            <TextField label="Website" source="website" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
