import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "./OrganizationTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { EMPLOYEEAPPOINTMENT_TITLE_FIELD } from "../employeeAppointment/EmployeeAppointmentTitle";
import { ORGANIZATIONPOSITION_TITLE_FIELD } from "../organizationPosition/OrganizationPositionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CANDIDATESOURCE_TITLE_FIELD } from "../candidateSource/CandidateSourceTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { CANDIDATEFEEDBACK_TITLE_FIELD } from "../candidateFeedback/CandidateFeedbackTitle";
import { CANDIDATEPERSONALQUALITY_TITLE_FIELD } from "../candidatePersonalQuality/CandidatePersonalQualityTitle";
import { CANDIDATETECHNOLOGY_TITLE_FIELD } from "../candidateTechnology/CandidateTechnologyTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { CANDIDATEINTERVIEW_TITLE_FIELD } from "../candidateInterview/CandidateInterviewTitle";
import { CANDIDATEINTERVIEWER_TITLE_FIELD } from "../candidateInterviewer/CandidateInterviewerTitle";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { WAREHOUSE_TITLE_FIELD } from "../warehouse/WarehouseTitle";
import { PIPELINESTAGE_TITLE_FIELD } from "../pipelineStage/PipelineStageTitle";
import { EMAILTEMPLATE_TITLE_FIELD } from "../emailTemplate/EmailTemplateTitle";
import { JOBPRESET_TITLE_FIELD } from "../jobPreset/JobPresetTitle";
import { JOBSEARCHOCCUPATION_TITLE_FIELD } from "../jobSearchOccupation/JobSearchOccupationTitle";
import { JOBSEARCHCATEGORY_TITLE_FIELD } from "../jobSearchCategory/JobSearchCategoryTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { EQUIPMENTSHARINGPOLICY_TITLE_FIELD } from "../equipmentSharingPolicy/EquipmentSharingPolicyTitle";
import { EQUIPMENT_TITLE_FIELD } from "../equipment/EquipmentTitle";
import { EXPENSECATEGORY_TITLE_FIELD } from "../expenseCategory/ExpenseCategoryTitle";
import { ORGANIZATIONVENDOR_TITLE_FIELD } from "../organizationVendor/OrganizationVendorTitle";
import { FEATURE_TITLE_FIELD } from "../feature/FeatureTitle";
import { KEYRESULT_TITLE_FIELD } from "../keyResult/KeyResultTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { INTEGRATIONTENANT_TITLE_FIELD } from "../integrationTenant/IntegrationTenantTitle";
import { INTEGRATIONENTITYSETTING_TITLE_FIELD } from "../integrationEntitySetting/IntegrationEntitySettingTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { EXPENSE_TITLE_FIELD } from "../expense/ExpenseTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { GOALKPI_TITLE_FIELD } from "../goalKpi/GoalKpiTitle";
import { GOAL_TITLE_FIELD } from "../goal/GoalTitle";
import { GOALTEMPLATE_TITLE_FIELD } from "../goalTemplate/GoalTemplateTitle";
import { GOALKPITEMPLATE_TITLE_FIELD } from "../goalKpiTemplate/GoalKpiTemplateTitle";
import { KNOWLEDGEBASE_TITLE_FIELD } from "../knowledgeBase/KnowledgeBaseTitle";
import { KNOWLEDGEBASEARTICLE_TITLE_FIELD } from "../knowledgeBaseArticle/KnowledgeBaseArticleTitle";
import { DEAL_TITLE_FIELD } from "../deal/DealTitle";
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";
import { PIPELINE_TITLE_FIELD } from "../pipeline/PipelineTitle";
import { PRODUCTTYPE_TITLE_FIELD } from "../productType/ProductTypeTitle";
import { PRODUCTCATEGORY_TITLE_FIELD } from "../productCategory/ProductCategoryTitle";
import { PRODUCTOPTIONGROUP_TITLE_FIELD } from "../productOptionGroup/ProductOptionGroupTitle";
import { PRODUCTOPTION_TITLE_FIELD } from "../productOption/ProductOptionTitle";
import { PRODUCTVARIANTPRICE_TITLE_FIELD } from "../productVariantPrice/ProductVariantPriceTitle";
import { PRODUCTVARIANTSETTING_TITLE_FIELD } from "../productVariantSetting/ProductVariantSettingTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";
import { APPROVALPOLICY_TITLE_FIELD } from "../approvalPolicy/ApprovalPolicyTitle";
import { REQUESTAPPROVAL_TITLE_FIELD } from "../requestApproval/RequestApprovalTitle";
import { SKILL_TITLE_FIELD } from "../skill/SkillTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { ORGANIZATIONSPRINT_TITLE_FIELD } from "../organizationSprint/OrganizationSprintTitle";
import { TIMESHEET_TITLE_FIELD } from "../timesheet/TimesheetTitle";
import { TIMEOFFPOLICY_TITLE_FIELD } from "../timeOffPolicy/TimeOffPolicyTitle";
import { WAREHOUSEPRODUCT_TITLE_FIELD } from "../warehouseProduct/WarehouseProductTitle";

export const OrganizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="AccountingTemplate"
          target="organizationId"
          label="AccountingTemplates"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Language Code" source="languageCode" />
            <TextField label="Mjml" source="mjml" />
            <TextField label="Hbs" source="hbs" />
            <TextField label="Template Type" source="templateType" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Activity"
          target="organizationId"
          label="Activities"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Title" source="title" />
            <TextField label="Description" source="description" />
            <TextField label="Meta Data" source="metaData" />
            <DateField source="date" label="Date" />
            <DateField source="time" label="Time" />
            <TextField label="Duration" source="duration" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Source" source="source" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Recorded At" source="recordedAt" />
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Time Slot"
              source="timeslot.id"
              reference="TimeSlot"
            >
              <TextField source={TIMESLOT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AppointmentEmployee"
          target="organizationId"
          label="AppointmentEmployees"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Appointment Id" source="appointmentId" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
              label="Employee Appointment"
              source="employeeappointment.id"
              reference="EmployeeAppointment"
            >
              <TextField source={EMPLOYEEAPPOINTMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ApprovalPolicy"
          target="organizationId"
          label="ApprovalPolicies"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Approval Type" source="approvalType" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AvailabilitySlot"
          target="organizationId"
          label="AvailabilitySlots"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Start Time" source="startTime" />
            <TextField label="End Time" source="endTime" />
            <BooleanField label="All Day" source="allDay" />
            <TextField label="Type Field" source="typeField" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          reference="Candidate"
          target="organizationId"
          label="Candidates"
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
            <TextField
              label="Minimum Billing Rate"
              source="minimumBillingRate"
            />
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
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          reference="CandidateCriterionRating"
          target="organizationId"
          label="CandidateCriterionRatings"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Candidate Feedback"
              source="candidatefeedback.id"
              reference="CandidateFeedback"
            >
              <TextField source={CANDIDATEFEEDBACK_TITLE_FIELD} />
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
              label="Candidate Personal Quality"
              source="candidatepersonalquality.id"
              reference="CandidatePersonalQuality"
            >
              <TextField source={CANDIDATEPERSONALQUALITY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Candidate Technology"
              source="candidatetechnology.id"
              reference="CandidateTechnology"
            >
              <TextField source={CANDIDATETECHNOLOGY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidateDocument"
          target="organizationId"
          label="CandidateDocuments"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Document Url" source="documentUrl" />
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidateEducation"
          target="organizationId"
          label="CandidateEducations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="School Name" source="schoolName" />
            <TextField label="Degree" source="degree" />
            <TextField label="Field" source="field" />
            <TextField label="Completion Date" source="completionDate" />
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
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
          reference="CandidateExperience"
          target="organizationId"
          label="CandidateExperiences"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Occupation" source="occupation" />
            <TextField label="Duration" source="duration" />
            <TextField label="Description" source="description" />
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
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidateFeedback"
          target="organizationId"
          label="CandidateFeedbacks"
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
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidateInterview"
          target="organizationId"
          label="CandidateInterviews"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Title" source="title" />
            <TextField label="Start Time" source="startTime" />
            <TextField label="End Time" source="endTime" />
            <TextField label="Location" source="location" />
            <TextField label="Note" source="note" />
            <BooleanField label="Is Archived" source="isArchived" />
            <TextField label="Rating" source="rating" />
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
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidateInterviewer"
          target="organizationId"
          label="CandidateInterviewers"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Candidate Interview"
              source="candidateinterview.id"
              reference="CandidateInterview"
            >
              <TextField source={CANDIDATEINTERVIEW_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Candidate Feedback"
              source="candidatefeedback.id"
              reference="CandidateFeedback"
            >
              <TextField source={CANDIDATEFEEDBACK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidatePersonalQuality"
          target="organizationId"
          label="CandidatePersonalQualities"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Rating" source="rating" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidateSkill"
          target="organizationId"
          label="CandidateSkills"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidateSource"
          target="organizationId"
          label="CandidateSources"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
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
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CandidateTechnology"
          target="organizationId"
          label="CandidateTechnologies"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Rating" source="rating" />
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
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Changelog"
          target="organizationId"
          label="Changelogs"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Icon" source="icon" />
            <TextField label="Title" source="title" />
            <TextField label="Date" source="date" />
            <TextField label="Content" source="content" />
            <TextField label="Learn More Url" source="learnMoreUrl" />
            <BooleanField label="Is Feature" source="isFeature" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Contact"
          target="organizationId"
          label="Contacts"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CustomSmtp"
          target="organizationId"
          label="CustomSmtps"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Host" source="host" />
            <TextField label="Port" source="port" />
            <BooleanField label="Secure" source="secure" />
            <TextField label="Username" source="username" />
            <TextField label="Password" source="password" />
            <BooleanField label="Is Validate" source="isValidate" />
            <TextField label="From Address" source="fromAddress" />
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
          reference="Deal"
          target="organizationId"
          label="Deals"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Title" source="title" />
            <TextField label="Probability" source="probability" />
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
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
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Pipeline Stage"
              source="pipelinestage.id"
              reference="PipelineStage"
            >
              <TextField source={PIPELINESTAGE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmailSent"
          target="organizationId"
          label="EmailSents"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Content" source="content" />
            <TextField label="Email" source="email" />
            <BooleanField label="Is Archived" source="isArchived" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
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
            <ReferenceField
              label="Email Template"
              source="emailtemplate.id"
              reference="EmailTemplate"
            >
              <TextField source={EMAILTEMPLATE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmailTemplate"
          target="organizationId"
          label="EmailTemplates"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Language Code" source="languageCode" />
            <TextField label="Mjml" source="mjml" />
            <TextField label="Hbs" source="hbs" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Employee"
          target="organizationId"
          label="Employees"
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
            <BooleanField
              label="Is Job Search Active"
              source="isJobSearchActive"
            />
            <BooleanField label="Is Online" source="isOnline" />
            <BooleanField
              label="Is Tracking Enabled"
              source="isTrackingEnabled"
            />
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
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Description" source="description" />
            <TextField label="Employee Level" source="employeeLevel" />
            <TextField label="Linked In Id" source="linkedInId" />
            <TextField label="Linked In Url" source="linkedInUrl" />
            <TextField
              label="Minimum Billing Rate"
              source="minimumBillingRate"
            />
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
            <BooleanField
              label="Show Average Bonus"
              source="showAverageBonus"
            />
            <BooleanField
              label="Show Average Expenses"
              source="showAverageExpenses"
            />
            <BooleanField
              label="Show Average Income"
              source="showAverageIncome"
            />
            <BooleanField label="Show Billrate" source="showBillrate" />
            <BooleanField label="Show Payperiod" source="showPayperiod" />
            <BooleanField label="Show Start Work On" source="showStartWorkOn" />
            <TextField label="Stackoverflow Url" source="stackoverflowUrl" />
            <TextField label="Started Work On" source="startedWorkOn" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeAppointment"
          target="organizationId"
          label="EmployeeAppointments"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Agenda" source="agenda" />
            <TextField label="Description" source="description" />
            <TextField label="Location" source="location" />
            <TextField label="Start Date Time" source="startDateTime" />
            <TextField label="End Date Time" source="endDateTime" />
            <BooleanField label="Buffer Time Start" source="bufferTimeStart" />
            <BooleanField label="Buffer Time End" source="bufferTimeEnd" />
            <TextField label="Buffer Time In Mins" source="bufferTimeInMins" />
            <TextField label="Break Time In Mins" source="breakTimeInMins" />
            <TextField label="Break Start Time" source="breakStartTime" />
            <TextField label="Emails" source="emails" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          reference="EmployeeAward"
          target="organizationId"
          label="EmployeeAwards"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Year" source="year" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeLevel"
          target="organizationId"
          label="EmployeeLevels"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Level" source="level" />
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
          reference="EmployeePhone"
          target="organizationId"
          label="EmployeePhones"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Phone Number" source="phoneNumber" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          reference="EmployeeProposalTemplate"
          target="organizationId"
          label="EmployeeProposalTemplates"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Content" source="content" />
            <BooleanField label="Is Default" source="isDefault" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          reference="EmployeeRecurringExpense"
          target="organizationId"
          label="EmployeeRecurringExpenses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Start Day" source="startDay" />
            <TextField label="Start Month" source="startMonth" />
            <TextField label="Start Year" source="startYear" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="End Day" source="endDay" />
            <TextField label="End Month" source="endMonth" />
            <TextField label="End Year" source="endYear" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Category Name" source="categoryName" />
            <TextField label="Value" source="value" />
            <TextField label="Currency" source="currency" />
            <TextField
              label="Parent Recurring Expense Id"
              source="parentRecurringExpenseId"
            />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          reference="EmployeeSetting"
          target="organizationId"
          label="EmployeeSettings"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Month" source="month" />
            <TextField label="Year" source="year" />
            <TextField label="Setting Type" source="settingType" />
            <TextField label="Value" source="value" />
            <TextField label="Currency" source="currency" />
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
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EmployeeUpworkJobSearchCriterion"
          target="organizationId"
          label="EmployeeUpworkJobSearchCriteria"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Keyword" source="keyword" />
            <TextField label="Job Type" source="jobType" />
            <ReferenceField
              label="Job Preset"
              source="jobpreset.id"
              reference="JobPreset"
            >
              <TextField source={JOBPRESET_TITLE_FIELD} />
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
            <ReferenceField
              label="Job Search Occupation"
              source="jobsearchoccupation.id"
              reference="JobSearchOccupation"
            >
              <TextField source={JOBSEARCHOCCUPATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Job Search Category"
              source="jobsearchcategory.id"
              reference="JobSearchCategory"
            >
              <TextField source={JOBSEARCHCATEGORY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Equipment"
          target="organizationId"
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
          reference="EquipmentSharing"
          target="organizationId"
          label="EquipmentSharings"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Share Request Day" source="shareRequestDay" />
            <TextField label="Share Start Day" source="shareStartDay" />
            <TextField label="Share End Day" source="shareEndDay" />
            <TextField label="Status" source="status" />
            <TextField label="Created By" source="createdBy" />
            <TextField label="Created By Name" source="createdByName" />
            <ReferenceField
              label="Equipment Sharing Policy"
              source="equipmentsharingpolicy.id"
              reference="EquipmentSharingPolicy"
            >
              <TextField source={EQUIPMENTSHARINGPOLICY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Equipment"
              source="equipment.id"
              reference="Equipment"
            >
              <TextField source={EQUIPMENT_TITLE_FIELD} />
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
          reference="EquipmentSharingPolicy"
          target="organizationId"
          label="EquipmentSharingPolicies"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
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
          reference="EstimateEmail"
          target="organizationId"
          label="EstimateEmails"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Token" source="token" />
            <TextField label="Email" source="email" />
            <TextField label="Expire Date" source="expireDate" />
            <BooleanField
              label="Convert Accepted Estimates"
              source="convertAcceptedEstimates"
            />
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
          reference="EventType"
          target="organizationId"
          label="EventTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Duration" source="duration" />
            <TextField label="Duration Unit" source="durationUnit" />
            <TextField label="Title" source="title" />
            <TextField label="Description" source="description" />
            <BooleanField label="Is Active" source="isActive" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Expense"
          target="organizationId"
          label="Expenses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Amount" source="amount" />
            <TextField label="Type Of Expense" source="typeOfExpense" />
            <TextField label="Notes" source="notes" />
            <TextField label="Currency" source="currency" />
            <TextField label="Value Date" source="valueDate" />
            <TextField label="Purpose" source="purpose" />
            <TextField label="Tax Type" source="taxType" />
            <TextField label="Tax Label" source="taxLabel" />
            <TextField label="Rate Value" source="rateValue" />
            <TextField label="Receipt" source="receipt" />
            <BooleanField label="Split Expense" source="splitExpense" />
            <TextField label="Reference" source="reference" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Expense Category"
              source="expensecategory.id"
              reference="ExpenseCategory"
            >
              <TextField source={EXPENSECATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
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
              label="Organization Vendor"
              source="organizationvendor.id"
              reference="OrganizationVendor"
            >
              <TextField source={ORGANIZATIONVENDOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ExpenseCategory"
          target="organizationId"
          label="ExpenseCategories"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FeatureOrganization"
          target="organizationId"
          label="FeatureOrganizations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="Is Enabled" source="isEnabled" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Feature"
              source="feature.id"
              reference="Feature"
            >
              <TextField source={FEATURE_TITLE_FIELD} />
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
          reference="Goal"
          target="organizationId"
          label="Goals"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Deadline" source="deadline" />
            <TextField label="Level" source="level" />
            <TextField label="Progress" source="progress" />
            <ReferenceField
              label="Employee Goal Owner Employee Id Toemployee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Key Result Goal Aligned Key Result Id Tokey Result"
              source="keyresult.id"
              reference="KeyResult"
            >
              <TextField source={KEYRESULT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee Goal Lead Id Toemployee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          reference="GoalGeneralSetting"
          target="organizationId"
          label="GoalGeneralSettings"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Max Objectives" source="maxObjectives" />
            <TextField label="Max Key Results" source="maxKeyResults" />
            <BooleanField
              label="Employee Can Create Objective"
              source="employeeCanCreateObjective"
            />
            <TextField label="Can Own Objectives" source="canOwnObjectives" />
            <TextField label="Can Own Key Result" source="canOwnKeyResult" />
            <BooleanField label="Kr Type Kpi" source="krTypeKPI" />
            <BooleanField label="Kr Type Task" source="krTypeTask" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="GoalKpi"
          target="organizationId"
          label="GoalKpis"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Unit" source="unit" />
            <TextField label="Operator" source="operator" />
            <TextField label="Current Value" source="currentValue" />
            <TextField label="Target Value" source="targetValue" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          reference="GoalKpiTemplate"
          target="organizationId"
          label="GoalKpiTemplates"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Unit" source="unit" />
            <TextField label="Operator" source="operator" />
            <TextField label="Current Value" source="currentValue" />
            <TextField label="Target Value" source="targetValue" />
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
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="GoalTemplate"
          target="organizationId"
          label="GoalTemplates"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Level" source="level" />
            <TextField label="Category" source="category" />
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
          reference="GoalTimeFrame"
          target="organizationId"
          label="GoalTimeFrames"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Status" source="status" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="End Date" source="endDate" />
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
          reference="ImageAsset"
          target="organizationId"
          label="ImageAssets"
        >
          <Datagrid rowClick="show">
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
            <TextField
              label="External Provider Id"
              source="externalProviderId"
            />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Income"
          target="organizationId"
          label="Incomes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Amount" source="amount" />
            <TextField label="Currency" source="currency" />
            <TextField label="Value Date" source="valueDate" />
            <TextField label="Notes" source="notes" />
            <BooleanField label="Is Bonus" source="isBonus" />
            <TextField label="Reference" source="reference" />
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
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
          reference="IntegrationEntitySetting"
          target="organizationId"
          label="IntegrationEntitySettings"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Entity" source="entity" />
            <BooleanField label="Sync" source="sync" />
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
              label="Integration Tenant"
              source="integrationtenant.id"
              reference="IntegrationTenant"
            >
              <TextField source={INTEGRATIONTENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="IntegrationEntitySettingTied"
          target="organizationId"
          label="IntegrationEntitySettingTieds"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Entity" source="entity" />
            <BooleanField label="Sync" source="sync" />
            <ReferenceField
              label="Integration Entity Setting"
              source="integrationentitysetting.id"
              reference="IntegrationEntitySetting"
            >
              <TextField source={INTEGRATIONENTITYSETTING_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="IntegrationMap"
          target="organizationId"
          label="IntegrationMaps"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Entity" source="entity" />
            <TextField label="Source Id" source="sourceId" />
            <TextField label="Gauzy Id" source="gauzyId" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Integration Tenant"
              source="integrationtenant.id"
              reference="IntegrationTenant"
            >
              <TextField source={INTEGRATIONTENANT_TITLE_FIELD} />
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
          reference="IntegrationSetting"
          target="organizationId"
          label="IntegrationSettings"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Settings Name" source="settingsName" />
            <TextField label="Settings Value" source="settingsValue" />
            <ReferenceField
              label="Integration Tenant"
              source="integrationtenant.id"
              reference="IntegrationTenant"
            >
              <TextField source={INTEGRATIONTENANT_TITLE_FIELD} />
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
          reference="IntegrationTenant"
          target="organizationId"
          label="IntegrationTenants"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Invite"
          target="organizationId"
          label="Invites"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Token" source="token" />
            <TextField label="Email" source="email" />
            <TextField label="Status" source="status" />
            <TextField label="Expire Date" source="expireDate" />
            <TextField label="Action Date" source="actionDate" />
            <TextField label="Code" source="code" />
            <TextField label="Full Name" source="fullName" />
            <ReferenceField
              label="User Invite Invited By Id Touser"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
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
            <ReferenceField label="Role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Invite User Id Touser"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InvoiceEstimateHistory"
          target="organizationId"
          label="InvoiceEstimateHistories"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Action" source="action" />
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
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
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Invoice"
          target="fromOrganizationId"
          label="Invoices"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Invoice Date" source="invoiceDate" />
            <TextField label="Invoice Number" source="invoiceNumber" />
            <TextField label="Due Date" source="dueDate" />
            <TextField label="Currency" source="currency" />
            <TextField label="Discount Value" source="discountValue" />
            <BooleanField label="Paid" source="paid" />
            <TextField label="Tax" source="tax" />
            <TextField label="Tax2" source="tax2" />
            <TextField label="Terms" source="terms" />
            <TextField label="Total Value" source="totalValue" />
            <TextField label="Status" source="status" />
            <BooleanField label="Is Estimate" source="isEstimate" />
            <BooleanField label="Is Accepted" source="isAccepted" />
            <TextField label="Discount Type" source="discountType" />
            <TextField label="Tax Type" source="taxType" />
            <TextField label="Tax2 Type" source="tax2Type" />
            <TextField label="Invoice Type" source="invoiceType" />
            <TextField label="Sent To" source="sentTo" />
            <TextField
              label="Organization Contact Id"
              source="organizationContactId"
            />
            <TextField label="Internal Note" source="internalNote" />
            <TextField label="Already Paid" source="alreadyPaid" />
            <TextField label="Amount Due" source="amountDue" />
            <BooleanField
              label="Has Remaining Amount Invoiced"
              source="hasRemainingAmountInvoiced"
            />
            <TextField label="Token" source="token" />
            <BooleanField label="Is Archived" source="isArchived" />
            <ReferenceField
              label="Organization Invoice Organization Id Toorganization"
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
              label="Organization Invoice From Organization Id Toorganization"
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
          reference="Invoice"
          target="organizationId"
          label="Invoices"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Invoice Date" source="invoiceDate" />
            <TextField label="Invoice Number" source="invoiceNumber" />
            <TextField label="Due Date" source="dueDate" />
            <TextField label="Currency" source="currency" />
            <TextField label="Discount Value" source="discountValue" />
            <BooleanField label="Paid" source="paid" />
            <TextField label="Tax" source="tax" />
            <TextField label="Tax2" source="tax2" />
            <TextField label="Terms" source="terms" />
            <TextField label="Total Value" source="totalValue" />
            <TextField label="Status" source="status" />
            <BooleanField label="Is Estimate" source="isEstimate" />
            <BooleanField label="Is Accepted" source="isAccepted" />
            <TextField label="Discount Type" source="discountType" />
            <TextField label="Tax Type" source="taxType" />
            <TextField label="Tax2 Type" source="tax2Type" />
            <TextField label="Invoice Type" source="invoiceType" />
            <TextField label="Sent To" source="sentTo" />
            <TextField
              label="Organization Contact Id"
              source="organizationContactId"
            />
            <TextField label="Internal Note" source="internalNote" />
            <TextField label="Already Paid" source="alreadyPaid" />
            <TextField label="Amount Due" source="amountDue" />
            <BooleanField
              label="Has Remaining Amount Invoiced"
              source="hasRemainingAmountInvoiced"
            />
            <TextField label="Token" source="token" />
            <BooleanField label="Is Archived" source="isArchived" />
            <ReferenceField
              label="Organization Invoice Organization Id Toorganization"
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
              label="Organization Invoice From Organization Id Toorganization"
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
          reference="InvoiceItem"
          target="organizationId"
          label="InvoiceItems"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Description" source="description" />
            <TextField label="Price" source="price" />
            <TextField label="Quantity" source="quantity" />
            <TextField label="Total Value" source="totalValue" />
            <BooleanField label="Apply Tax" source="applyTax" />
            <BooleanField label="Apply Discount" source="applyDiscount" />
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Expense"
              source="expense.id"
              reference="Expense"
            >
              <TextField source={EXPENSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
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
          target="organizationId"
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
          reference="JobPreset"
          target="organizationId"
          label="JobPresets"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="JobPresetUpworkJobSearchCriterion"
          target="organizationId"
          label="JobPresetUpworkJobSearchCriteria"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Keyword" source="keyword" />
            <TextField label="Job Type" source="jobType" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Job Preset"
              source="jobpreset.id"
              reference="JobPreset"
            >
              <TextField source={JOBPRESET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Job Search Category"
              source="jobsearchcategory.id"
              reference="JobSearchCategory"
            >
              <TextField source={JOBSEARCHCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Job Search Occupation"
              source="jobsearchoccupation.id"
              reference="JobSearchOccupation"
            >
              <TextField source={JOBSEARCHOCCUPATION_TITLE_FIELD} />
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
          reference="JobSearchCategory"
          target="organizationId"
          label="JobSearchCategories"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField
              label="Job Source Category Id"
              source="jobSourceCategoryId"
            />
            <TextField label="Job Source" source="jobSource" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="JobSearchOccupation"
          target="organizationId"
          label="JobSearchOccupations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField
              label="Job Source Occupation Id"
              source="jobSourceOccupationId"
            />
            <TextField label="Job Source" source="jobSource" />
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
          reference="KeyResult"
          target="organizationId"
          label="KeyResults"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Target Value" source="targetValue" />
            <TextField label="Initial Value" source="initialValue" />
            <TextField label="Unit" source="unit" />
            <TextField label="Update" source="update" />
            <TextField label="Progress" source="progress" />
            <TextField label="Deadline" source="deadline" />
            <TextField label="Hard Deadline" source="hardDeadline" />
            <TextField label="Soft Deadline" source="softDeadline" />
            <TextField label="Status" source="status" />
            <TextField label="Weight" source="weight" />
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Goal Kpi"
              source="goalkpi.id"
              reference="GoalKpi"
            >
              <TextField source={GOALKPI_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee Key Result Owner Id Toemployee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee Key Result Lead Id Toemployee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Goal Key Result Goal Id Togoal"
              source="goal.id"
              reference="Goal"
            >
              <TextField source={GOAL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="KeyResultTemplate"
          target="organizationId"
          label="KeyResultTemplates"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Unit" source="unit" />
            <TextField label="Target Value" source="targetValue" />
            <TextField label="Initial Value" source="initialValue" />
            <TextField label="Deadline" source="deadline" />
            <ReferenceField
              label="Goal Template"
              source="goaltemplate.id"
              reference="GoalTemplate"
            >
              <TextField source={GOALTEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Goal Kpi Template"
              source="goalkpitemplate.id"
              reference="GoalKpiTemplate"
            >
              <TextField source={GOALKPITEMPLATE_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="KeyResultUpdate"
          target="organizationId"
          label="KeyResultUpdates"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Update" source="update" />
            <TextField label="Progress" source="progress" />
            <TextField label="Owner" source="owner" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Key Result"
              source="keyresult.id"
              reference="KeyResult"
            >
              <TextField source={KEYRESULT_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="KnowledgeBase"
          target="organizationId"
          label="KnowledgeBases"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Flag" source="flag" />
            <TextField label="Icon" source="icon" />
            <TextField label="Privacy" source="privacy" />
            <TextField label="Language" source="language" />
            <TextField label="Color" source="color" />
            <TextField label="Description" source="description" />
            <TextField label="Data" source="data" />
            <TextField label="Index" source="index" />
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
              label="Knowledge Base"
              source="knowledgebase.id"
              reference="KnowledgeBase"
            >
              <TextField source={KNOWLEDGEBASE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="KnowledgeBaseArticle"
          target="organizationId"
          label="KnowledgeBaseArticles"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Data" source="data" />
            <BooleanField label="Draft" source="draft" />
            <BooleanField label="Privacy" source="privacy" />
            <TextField label="Index" source="index" />
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
              label="Knowledge Base"
              source="knowledgebase.id"
              reference="KnowledgeBase"
            >
              <TextField source={KNOWLEDGEBASE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="KnowledgeBaseAuthor"
          target="organizationId"
          label="KnowledgeBaseAuthors"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Knowledge Base Article"
              source="knowledgebasearticle.id"
              reference="KnowledgeBaseArticle"
            >
              <TextField source={KNOWLEDGEBASEARTICLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
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
          reference="Merchant"
          target="organizationId"
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
          reference="OrganizationAward"
          target="organizationId"
          label="OrganizationAwards"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Year" source="year" />
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
          reference="OrganizationContact"
          target="organizationId"
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
          reference="OrganizationDepartment"
          target="organizationId"
          label="OrganizationDepartments"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationDocument"
          target="organizationId"
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
          reference="OrganizationEmploymentType"
          target="organizationId"
          label="OrganizationEmploymentTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationLanguage"
          target="organizationId"
          label="OrganizationLanguages"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Level" source="level" />
            <ReferenceField
              label="Language"
              source="language.id"
              reference="Language"
            >
              <TextField source={LANGUAGE_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationPosition"
          target="organizationId"
          label="OrganizationPositions"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
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
          reference="OrganizationProject"
          target="organizationId"
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
          reference="OrganizationRecurringExpense"
          target="organizationId"
          label="OrganizationRecurringExpenses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Start Day" source="startDay" />
            <TextField label="Start Month" source="startMonth" />
            <TextField label="Start Year" source="startYear" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="End Day" source="endDay" />
            <TextField label="End Month" source="endMonth" />
            <TextField label="End Year" source="endYear" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Category Name" source="categoryName" />
            <TextField label="Value" source="value" />
            <TextField label="Currency" source="currency" />
            <BooleanField label="Split Expense" source="splitExpense" />
            <TextField
              label="Parent Recurring Expense Id"
              source="parentRecurringExpenseId"
            />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationSprint"
          target="organizationId"
          label="OrganizationSprints"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Goal" source="goal" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Length" source="length" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Day Start" source="dayStart" />
            <BooleanField label="Is Active" source="isActive" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationTaskSetting"
          target="organizationId"
          label="OrganizationTaskSettings"
        >
          <Datagrid rowClick="show">
            <BooleanField
              label="Is Tasks Comments Enabled"
              source="isTasksCommentsEnabled"
            />
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField
              label="Is Tasks Privacy Enabled"
              source="isTasksPrivacyEnabled"
            />
            <BooleanField
              label="Is Tasks Multiple Assignees Enabled"
              source="isTasksMultipleAssigneesEnabled"
            />
            <BooleanField
              label="Is Tasks Manual Time Enabled"
              source="isTasksManualTimeEnabled"
            />
            <BooleanField
              label="Is Tasks Group Estimation Enabled"
              source="isTasksGroupEstimationEnabled"
            />
            <BooleanField
              label="Is Tasks History Enabled"
              source="isTasksHistoryEnabled"
            />
            <BooleanField
              label="Is Tasks Acceptance Criteria Enabled"
              source="isTasksAcceptanceCriteriaEnabled"
            />
            <BooleanField
              label="Is Tasks Drafts Enabled"
              source="isTasksDraftsEnabled"
            />
            <BooleanField
              label="Is Tasks Estimation In Hours Enabled"
              source="isTasksEstimationInHoursEnabled"
            />
            <BooleanField
              label="Is Tasks Estimation In Story Points Enabled"
              source="isTasksEstimationInStoryPointsEnabled"
            />
            <BooleanField
              label="Is Tasks Proof Of Completion Enabled"
              source="isTasksProofOfCompletionEnabled"
            />
            <TextField
              label="Tasks Proof Of Completion Type"
              source="tasksProofOfCompletionType"
            />
            <BooleanField
              label="Is Tasks Linked Enabled"
              source="isTasksLinkedEnabled"
            />
            <BooleanField
              label="Is Tasks Notify Left Enabled"
              source="isTasksNotifyLeftEnabled"
            />
            <TextField
              label="Tasks Notify Left Period Days"
              source="tasksNotifyLeftPeriodDays"
            />
            <BooleanField
              label="Is Tasks Auto Close Enabled"
              source="isTasksAutoCloseEnabled"
            />
            <TextField
              label="Tasks Auto Close Period Days"
              source="tasksAutoClosePeriodDays"
            />
            <BooleanField
              label="Is Tasks Auto Archive Enabled"
              source="isTasksAutoArchiveEnabled"
            />
            <TextField
              label="Tasks Auto Archive Period Days"
              source="tasksAutoArchivePeriodDays"
            />
            <BooleanField
              label="Is Tasks Auto Status Enabled"
              source="isTasksAutoStatusEnabled"
            />
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
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
          reference="OrganizationTeam"
          target="organizationId"
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
          reference="OrganizationTeamEmployee"
          target="organizationId"
          label="OrganizationTeamEmployees"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField
              label="Is Tracking Enabled"
              source="isTrackingEnabled"
            />
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
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
          reference="OrganizationTeamJoinRequest"
          target="organizationId"
          label="OrganizationTeamJoinRequests"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Email" source="email" />
            <TextField label="Full Name" source="fullName" />
            <TextField label="Link Address" source="linkAddress" />
            <TextField label="Position" source="position" />
            <TextField label="Status" source="status" />
            <TextField label="Code" source="code" />
            <TextField label="Token" source="token" />
            <TextField label="Expired At" source="expiredAt" />
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
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
          reference="OrganizationVendor"
          target="organizationId"
          label="OrganizationVendors"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Email" source="email" />
            <TextField label="Phone" source="phone" />
            <TextField label="Website" source="website" />
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
          reference="Payment"
          target="organizationId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
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
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Payment Date" source="paymentDate" />
            <TextField label="Amount" source="amount" />
            <TextField label="Note" source="note" />
            <TextField label="Currency" source="currency" />
            <BooleanField label="Overdue" source="overdue" />
            <TextField label="Payment Method" source="paymentMethod" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
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
          reference="Pipeline"
          target="organizationId"
          label="Pipelines"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Description" source="description" />
            <TextField label="Name" source="name" />
            <BooleanField label="Is Active" source="isActive" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PipelineStage"
          target="organizationId"
          label="PipelineStages"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Description" source="description" />
            <TextField label="Index" source="index" />
            <TextField label="Name" source="name" />
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
              label="Pipeline"
              source="pipeline.id"
              reference="Pipeline"
            >
              <TextField source={PIPELINE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Product"
          target="organizationId"
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
          target="organizationId"
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
          reference="ProductCategoryTranslation"
          target="organizationId"
          label="ProductCategoryTranslations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Language Code" source="languageCode" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Category"
              source="productcategory.id"
              reference="ProductCategory"
            >
              <TextField source={PRODUCTCATEGORY_TITLE_FIELD} />
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
          reference="ProductOption"
          target="organizationId"
          label="ProductOptions"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Code" source="code" />
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
              label="Product Option Group"
              source="productoptiongroup.id"
              reference="ProductOptionGroup"
            >
              <TextField source={PRODUCTOPTIONGROUP_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductOptionGroup"
          target="organizationId"
          label="ProductOptionGroups"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
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
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductOptionGroupTranslation"
          target="organizationId"
          label="ProductOptionGroupTranslations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Language Code" source="languageCode" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Option Group"
              source="productoptiongroup.id"
              reference="ProductOptionGroup"
            >
              <TextField source={PRODUCTOPTIONGROUP_TITLE_FIELD} />
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
          reference="ProductOptionTranslation"
          target="organizationId"
          label="ProductOptionTranslations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Language Code" source="languageCode" />
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
              label="Product Option"
              source="productoption.id"
              reference="ProductOption"
            >
              <TextField source={PRODUCTOPTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductTranslation"
          target="organizationId"
          label="ProductTranslations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Language Code" source="languageCode" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
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
          reference="ProductType"
          target="organizationId"
          label="ProductTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Icon" source="icon" />
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
          reference="ProductTypeTranslation"
          target="organizationId"
          label="ProductTypeTranslations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Language Code" source="languageCode" />
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
              label="Product Type"
              source="producttype.id"
              reference="ProductType"
            >
              <TextField source={PRODUCTTYPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductVariant"
          target="organizationId"
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
          reference="ProductVariantPrice"
          target="organizationId"
          label="ProductVariantPrices"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Unit Cost" source="unitCost" />
            <TextField label="Unit Cost Currency" source="unitCostCurrency" />
            <TextField label="Retail Price" source="retailPrice" />
            <TextField
              label="Retail Price Currency"
              source="retailPriceCurrency"
            />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant Product Variant Price Product Variant Id Toproduct Variant"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant Product Variant Price Id Toproduct Variant Price"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductVariantSetting"
          target="organizationId"
          label="ProductVariantSettings"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="Is Subscription" source="isSubscription" />
            <BooleanField
              label="Is Purchase Automatically"
              source="isPurchaseAutomatically"
            />
            <BooleanField label="Can Be Sold" source="canBeSold" />
            <BooleanField label="Can Be Purchased" source="canBePurchased" />
            <BooleanField label="Can Be Charged" source="canBeCharged" />
            <BooleanField label="Can Be Rented" source="canBeRented" />
            <BooleanField label="Is Equipment" source="isEquipment" />
            <BooleanField label="Track Inventory" source="trackInventory" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant Product Variant Setting Product Variant Id Toproduct Variant"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant Product Variant Setting Id Toproduct Variant Setting"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Proposal"
          target="organizationId"
          label="Proposals"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Job Post Url" source="jobPostUrl" />
            <TextField label="Value Date" source="valueDate" />
            <TextField label="Job Post Content" source="jobPostContent" />
            <TextField label="Proposal Content" source="proposalContent" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
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
          reference="ReportOrganization"
          target="organizationId"
          label="ReportOrganizations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="Is Enabled" source="isEnabled" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Report"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
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
          reference="RequestApproval"
          target="organizationId"
          label="RequestApprovals"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Status" source="status" />
            <TextField label="Created By" source="createdBy" />
            <TextField label="Created By Name" source="createdByName" />
            <TextField label="Min Count" source="minCount" />
            <TextField label="Request Id" source="requestId" />
            <TextField label="Request Type" source="requestType" />
            <ReferenceField
              label="Approval Policy"
              source="approvalpolicy.id"
              reference="ApprovalPolicy"
            >
              <TextField source={APPROVALPOLICY_TITLE_FIELD} />
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
          reference="RequestApprovalEmployee"
          target="organizationId"
          label="RequestApprovalEmployees"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Request Approval"
              source="requestapproval.id"
              reference="RequestApproval"
            >
              <TextField source={REQUESTAPPROVAL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
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
          reference="RequestApprovalTeam"
          target="organizationId"
          label="RequestApprovalTeams"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Request Approval"
              source="requestapproval.id"
              reference="RequestApproval"
            >
              <TextField source={REQUESTAPPROVAL_TITLE_FIELD} />
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
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Screenshot"
          target="organizationId"
          label="Screenshots"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="File" source="file" />
            <TextField label="Thumb" source="thumb" />
            <TextField label="Recorded At" source="recordedAt" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Storage Provider" source="storageProvider" />
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
              label="Time Slot"
              source="timeslot.id"
              reference="TimeSlot"
            >
              <TextField source={TIMESLOT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Skill"
          target="organizationId"
          label="Skills"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Description" source="description" />
            <TextField label="Color" source="color" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SkillOrganization"
          target="organizationId"
          label="SkillOrganizations"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Skill" source="skill.id" reference="Skill">
              <TextField source={SKILL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Tag"
          target="organizationId"
          label="Tags"
        >
          <Datagrid rowClick="show">
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Color" source="color" />
            <BooleanField label="Is System" source="isSystem" />
            <TextField label="Icon" source="icon" />
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
          reference="TagOrganization"
          target="organizationId"
          label="TagOrganizations"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Task"
          target="organizationId"
          label="Tasks"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Title" source="title" />
            <TextField label="Description" source="description" />
            <TextField label="Status" source="status" />
            <TextField label="Estimate" source="estimate" />
            <TextField label="Due Date" source="dueDate" />
            <TextField label="Number Field" source="numberField" />
            <TextField label="Prefix" source="prefix" />
            <TextField label="Priority" source="priority" />
            <TextField label="Size" source="size" />
            <BooleanField label="Public Field" source="publicField" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="Resolved At" source="resolvedAt" />
            <TextField label="Version" source="version" />
            <TextField label="Issue Type" source="issueType" />
            <ReferenceField
              label="Organization Sprint"
              source="organizationsprint.id"
              reference="OrganizationSprint"
            >
              <TextField source={ORGANIZATIONSPRINT_TITLE_FIELD} />
            </ReferenceField>
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
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
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
          reference="TaskLinkedIssue"
          target="organizationId"
          label="TaskLinkedIssues"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Action" source="action" />
            <ReferenceField
              label="Task Task Linked Issues Task To Id Totask"
              source="task.id"
              reference="Task"
            >
              <TextField source={TASK_TITLE_FIELD} />
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
              label="Task Task Linked Issues Task From Id Totask"
              source="task.id"
              reference="Task"
            >
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskPriority"
          target="organizationId"
          label="TaskPriorities"
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
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskRelatedIssueType"
          target="organizationId"
          label="TaskRelatedIssueTypes"
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
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskSize"
          target="organizationId"
          label="TaskSizes"
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
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
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
          reference="TaskStatus"
          target="organizationId"
          label="TaskStatuses"
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
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
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
          reference="TaskVersion"
          target="organizationId"
          label="TaskVersions"
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
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
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
          reference="TimeLog"
          target="organizationId"
          label="TimeLogs"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Started At" source="startedAt" />
            <TextField label="Stopped At" source="stoppedAt" />
            <TextField label="Log Type" source="logType" />
            <TextField label="Source" source="source" />
            <TextField label="Description" source="description" />
            <TextField label="Reason" source="reason" />
            <BooleanField label="Is Billable" source="isBillable" />
            <TextField label="Deleted At" source="deletedAt" />
            <BooleanField label="Is Running" source="isRunning" />
            <TextField label="Version" source="version" />
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
            <ReferenceField
              label="Timesheet"
              source="timesheet.id"
              reference="Timesheet"
            >
              <TextField source={TIMESHEET_TITLE_FIELD} />
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
          reference="TimeOffPolicy"
          target="organizationId"
          label="TimeOffPolicies"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <BooleanField label="Requires Approval" source="requiresApproval" />
            <BooleanField label="Paid" source="paid" />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TimeOffRequest"
          target="organizationId"
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
        <ReferenceManyField
          reference="Timesheet"
          target="organizationId"
          label="Timesheets"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Duration" source="duration" />
            <TextField label="Keyboard" source="keyboard" />
            <TextField label="Mouse" source="mouse" />
            <TextField label="Overall" source="overall" />
            <TextField label="Started At" source="startedAt" />
            <TextField label="Stopped At" source="stoppedAt" />
            <TextField label="Approved At" source="approvedAt" />
            <TextField label="Submitted At" source="submittedAt" />
            <TextField label="Locked At" source="lockedAt" />
            <BooleanField label="Is Billed" source="isBilled" />
            <TextField label="Status" source="status" />
            <TextField label="Deleted At" source="deletedAt" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          reference="TimeSlot"
          target="organizationId"
          label="TimeSlots"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Duration" source="duration" />
            <TextField label="Keyboard" source="keyboard" />
            <TextField label="Mouse" source="mouse" />
            <TextField label="Overall" source="overall" />
            <TextField label="Started At" source="startedAt" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
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
          reference="TimeSlotMinute"
          target="organizationId"
          label="TimeSlotMinutes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Keyboard" source="keyboard" />
            <TextField label="Mouse" source="mouse" />
            <TextField label="Datetime" source="datetime" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Time Slot"
              source="timeslot.id"
              reference="TimeSlot"
            >
              <TextField source={TIMESLOT_TITLE_FIELD} />
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
          reference="UserOrganization"
          target="organizationId"
          label="UserOrganizations"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="Is Default" source="isDefault" />
            <BooleanField label="Is Active" source="isActive" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Warehouse"
          target="organizationId"
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
        <ReferenceManyField
          reference="WarehouseProduct"
          target="organizationId"
          label="WarehouseProducts"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Quantity" source="quantity" />
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
              label="Warehouse"
              source="warehouse.id"
              reference="Warehouse"
            >
              <TextField source={WAREHOUSE_TITLE_FIELD} />
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
          reference="WarehouseProductVariant"
          target="organizationId"
          label="WarehouseProductVariants"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Quantity" source="quantity" />
            <ReferenceField
              label="Warehouse Product"
              source="warehouseproduct.id"
              reference="WarehouseProduct"
            >
              <TextField source={WAREHOUSEPRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product Variant"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
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
