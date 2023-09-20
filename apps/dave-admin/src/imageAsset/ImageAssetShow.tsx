import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { IMAGEASSET_TITLE_FIELD } from "./ImageAssetTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { DEAL_TITLE_FIELD } from "../deal/DealTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PRODUCTTYPE_TITLE_FIELD } from "../productType/ProductTypeTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PRODUCTVARIANTPRICE_TITLE_FIELD } from "../productVariantPrice/ProductVariantPriceTitle";
import { PRODUCTVARIANTSETTING_TITLE_FIELD } from "../productVariantSetting/ProductVariantSettingTitle";
import { TIMEOFFPOLICY_TITLE_FIELD } from "../timeOffPolicy/TimeOffPolicyTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const ImageAssetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Url" source="url" />
        <TextField label="Width" source="width" />
        <TextField label="Height" source="height" />
        <BooleanField label="Is Featured" source="isFeatured" />
        <TextField label="Thumb" source="thumb" />
        <TextField label="Size" source="size" />
        <TextField label="External Provider Id" source="externalProviderId" />
        <TextField label="Storage Provider" source="storageProvider" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceField
          label="Tenant Image Asset Tenant Id Totenant"
          source="tenant.id"
          reference="Tenant"
        >
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization Image Asset Organization Id Toorganization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Organization"
          target="imageAssetOrganizationImageIdToimageAssetId"
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
        <ReferenceManyField
          reference="Tenant"
          target="imageAssetTenantImageIdToimageAssetId"
          label="Tenants"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Logo" source="logo" />
            <ReferenceField
              label="Image Asset Tenant Image Id Toimage Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Equipment"
          target="imageId"
          label="Equipment Items"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Serial Number" source="serialNumber" />
            <TextField label="Manufactured Year" source="manufacturedYear" />
            <TextField label="Initial Cost" source="initialCost" />
            <TextField label="Currency" source="currency" />
            <TextField label="Max Share Period" source="maxSharePeriod" />
            <BooleanField
              label="Auto Approve Share"
              source="autoApproveShare"
            />
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="IssueType"
          target="imageId"
          label="IssueTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Value" source="value" />
            <TextField label="Description" source="description" />
            <TextField label="Icon" source="icon" />
            <TextField label="Color" source="color" />
            <BooleanField label="Is System" source="isSystem" />
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Merchant"
          target="logoId"
          label="Merchants"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Code" source="code" />
            <TextField label="Email" source="email" />
            <TextField label="Phone" source="phone" />
            <TextField label="Description" source="description" />
            <BooleanField label="Active" source="active" />
            <TextField label="Currency" source="currency" />
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationContact"
          target="imageId"
          label="OrganizationContacts"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Primary Email" source="primaryEmail" />
            <TextField label="Primary Phone" source="primaryPhone" />
            <TextField label="Notes" source="notes" />
            <TextField label="Image Url" source="imageUrl" />
            <TextField label="Budget" source="budget" />
            <TextField label="Created By" source="createdBy" />
            <TextField label="Invite Status" source="inviteStatus" />
            <TextField label="Contact Type" source="contactType" />
            <TextField label="Budget Type" source="budgetType" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Deal" source="deal.id" reference="Deal">
              <TextField source={DEAL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationDocument"
          target="documentId"
          label="OrganizationDocuments"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Document Url" source="documentUrl" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationProject"
          target="imageId"
          label="OrganizationProjects"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Billing" source="billing" />
            <TextField label="Currency" source="currency" />
            <BooleanField label="Public Field" source="publicField" />
            <TextField label="Owner" source="owner" />
            <TextField label="Task List Type" source="taskListType" />
            <TextField label="Code" source="code" />
            <TextField label="Description" source="description" />
            <TextField label="Color" source="color" />
            <BooleanField label="Billable" source="billable" />
            <BooleanField label="Billing Flat" source="billingFlat" />
            <BooleanField label="Open Source" source="openSource" />
            <TextField label="Project Url" source="projectUrl" />
            <TextField
              label="Open Source Project Url"
              source="openSourceProjectUrl"
            />
            <TextField label="Budget" source="budget" />
            <TextField label="Budget Type" source="budgetType" />
            <TextField label="Members Count" source="membersCount" />
            <TextField label="Image Url" source="imageUrl" />
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationTeam"
          target="imageId"
          label="OrganizationTeams"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Prefix" source="prefix" />
            <BooleanField label="Public Field" source="publicField" />
            <TextField label="Profile Link" source="profileLink" />
            <TextField label="Logo" source="logo" />
            <TextField label="Color" source="color" />
            <TextField label="Emoji" source="emoji" />
            <TextField label="Team Size" source="teamSize" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Product"
          target="featuredImageId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="Enabled" source="enabled" />
            <TextField label="Code" source="code" />
            <TextField label="Image Url" source="imageUrl" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Type"
              source="producttype.id"
              reference="ProductType"
            >
              <TextField source={PRODUCTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Category"
              source="productcategory.id"
              reference="ProductCategory"
            >
              <TextField source={PRODUCTCATEGORY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductCategory"
          target="imageId"
          label="ProductCategories"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Image Url" source="imageUrl" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductGalleryItem"
          target="imageAssetId"
          label="ProductGalleryItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductVariant"
          target="imageId"
          label="ProductVariants"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Taxes" source="taxes" />
            <TextField label="Notes" source="notes" />
            <TextField label="Quantity" source="quantity" />
            <TextField
              label="Billing Invoicing Policy"
              source="billingInvoicingPolicy"
            />
            <TextField label="Internal Reference" source="internalReference" />
            <BooleanField label="Enabled" source="enabled" />
            <ReferenceField
              label="Product Variant Price Product Variant Price Id Toproduct Variant Price"
              source="productvariantprice.id"
              reference="ProductVariantPrice"
            >
              <TextField source={PRODUCTVARIANTPRICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant Setting Product Variant Setting Id Toproduct Variant Setting"
              source="productvariantsetting.id"
              reference="ProductVariantSetting"
            >
              <TextField source={PRODUCTVARIANTSETTING_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant Price Product Variant Price Product Variant Id Toproduct Variant"
              source="productvariantprice.id"
              reference="ProductVariantPrice"
            >
              <TextField source={PRODUCTVARIANTPRICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant Setting Product Variant Setting Product Variant Id Toproduct Variant"
              source="productvariantsetting.id"
              reference="ProductVariantSetting"
            >
              <TextField source={PRODUCTVARIANTSETTING_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TimeOffRequest"
          target="documentId"
          label="TimeOffRequests"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Document Url" source="documentUrl" />
            <TextField label="Description" source="description" />
            <TextField label="Start" source="start" />
            <TextField label="End" source="end" />
            <TextField label="Request Date" source="requestDate" />
            <TextField label="Status" source="status" />
            <BooleanField label="Is Holiday" source="isHoliday" />
            <BooleanField label="Is Archived" source="isArchived" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Time Off Policy"
              source="timeoffpolicy.id"
              reference="TimeOffPolicy"
            >
              <TextField source={TIMEOFFPOLICY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="imageId" label="Users">
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Third Party Id" source="thirdPartyId" />
            <TextField label="First Name" source="firstName" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Email" source="email" />
            <TextField label="Hash" source="hash" />
            <TextField label="Image Url" source="imageUrl" />
            <TextField label="Preferred Language" source="preferredLanguage" />
            <TextField label="Refresh Token" source="refreshToken" />
            <BooleanField label="Is Active" source="isActive" />
            <TextField
              label="Preferred Component Layout"
              source="preferredComponentLayout"
            />
            <TextField label="Code" source="code" />
            <TextField label="Code Expire At" source="codeExpireAt" />
            <TextField label="Email Verified At" source="emailVerifiedAt" />
            <TextField label="Email Token" source="emailToken" />
            <TextField label="Phone Number" source="phoneNumber" />
            <TextField label="Time Zone" source="timeZone" />
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Warehouse"
          target="logoId"
          label="Warehouses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Code" source="code" />
            <TextField label="Email" source="email" />
            <TextField label="Description" source="description" />
            <BooleanField label="Active" source="active" />
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
