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
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const OrganizationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Organizations"}
      perPage={50}
      pagination={<Pagination />}
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
        <BooleanField label="Discount After Tax" source="discountAfterTax" />
        <TextField label="Fiscal End Date" source="fiscalEndDate" />
        <TextField label="Fiscal Information" source="fiscalInformation" />
        <TextField label="Fiscal Start Date" source="fiscalStartDate" />
        <BooleanField label="Future Date Allowed" source="futureDateAllowed" />
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Image Asset Organization Image Id Toimage Asset"
          source="imageasset.id"
          reference="ImageAsset"
        >
          <TextField source={IMAGEASSET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Image Url" source="imageUrl" />
        <TextField label="Inactivity Time Limit" source="inactivityTimeLimit" />
        <TextField label="Invite Expiry Period" source="inviteExpiryPeriod" />
        <BooleanField label="Invites Allowed" source="invitesAllowed" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Default" source="isDefault" />
        <BooleanField label="Is Remove Idle Time" source="isRemoveIdleTime" />
        <TextField label="Minimum Project Size" source="minimumProjectSize" />
        <TextField label="Name" source="name" />
        <TextField label="Number Format" source="numberFormat" />
        <TextField label="Official Name" source="officialName" />
        <TextField label="Overview" source="overview" />
        <TextField label="Profile Link" source="profileLink" />
        <TextField label="Region Code" source="regionCode" />
        <TextField label="Registration Date" source="registrationDate" />
        <BooleanField label="Require Client" source="requireClient" />
        <BooleanField label="Require Description" source="requireDescription" />
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
        <BooleanField label="Show Clients Count" source="showClientsCount" />
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
        <BooleanField label="Show Projects Count" source="showProjectsCount" />
        <BooleanField label="Show Total Hours" source="showTotalHours" />
        <TextField label="Start Week On" source="startWeekOn" />
        <TextField label="Tax Id" source="taxId" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
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
    </List>
  );
};
