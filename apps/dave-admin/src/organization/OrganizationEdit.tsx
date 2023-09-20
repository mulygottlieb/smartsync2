import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { AccountingTemplateTitle } from "../accountingTemplate/AccountingTemplateTitle";
import { ActivityTitle } from "../activity/ActivityTitle";
import { AppointmentEmployeeTitle } from "../appointmentEmployee/AppointmentEmployeeTitle";
import { ApprovalPolicyTitle } from "../approvalPolicy/ApprovalPolicyTitle";
import { AvailabilitySlotTitle } from "../availabilitySlot/AvailabilitySlotTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { CandidateCriterionRatingTitle } from "../candidateCriterionRating/CandidateCriterionRatingTitle";
import { CandidateDocumentTitle } from "../candidateDocument/CandidateDocumentTitle";
import { CandidateEducationTitle } from "../candidateEducation/CandidateEducationTitle";
import { CandidateExperienceTitle } from "../candidateExperience/CandidateExperienceTitle";
import { CandidateFeedbackTitle } from "../candidateFeedback/CandidateFeedbackTitle";
import { CandidateInterviewTitle } from "../candidateInterview/CandidateInterviewTitle";
import { CandidateInterviewerTitle } from "../candidateInterviewer/CandidateInterviewerTitle";
import { CandidatePersonalQualityTitle } from "../candidatePersonalQuality/CandidatePersonalQualityTitle";
import { CandidateSkillTitle } from "../candidateSkill/CandidateSkillTitle";
import { CandidateSourceTitle } from "../candidateSource/CandidateSourceTitle";
import { CandidateTechnologyTitle } from "../candidateTechnology/CandidateTechnologyTitle";
import { ChangelogTitle } from "../changelog/ChangelogTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { CustomSmtpTitle } from "../customSmtp/CustomSmtpTitle";
import { DealTitle } from "../deal/DealTitle";
import { EmailSentTitle } from "../emailSent/EmailSentTitle";
import { EmailTemplateTitle } from "../emailTemplate/EmailTemplateTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { EmployeeAppointmentTitle } from "../employeeAppointment/EmployeeAppointmentTitle";
import { EmployeeAwardTitle } from "../employeeAward/EmployeeAwardTitle";
import { EmployeeLevelTitle } from "../employeeLevel/EmployeeLevelTitle";
import { EmployeePhoneTitle } from "../employeePhone/EmployeePhoneTitle";
import { EmployeeProposalTemplateTitle } from "../employeeProposalTemplate/EmployeeProposalTemplateTitle";
import { EmployeeRecurringExpenseTitle } from "../employeeRecurringExpense/EmployeeRecurringExpenseTitle";
import { EmployeeSettingTitle } from "../employeeSetting/EmployeeSettingTitle";
import { EmployeeUpworkJobSearchCriterionTitle } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionTitle";
import { EquipmentTitle } from "../equipment/EquipmentTitle";
import { EquipmentSharingTitle } from "../equipmentSharing/EquipmentSharingTitle";
import { EquipmentSharingPolicyTitle } from "../equipmentSharingPolicy/EquipmentSharingPolicyTitle";
import { EstimateEmailTitle } from "../estimateEmail/EstimateEmailTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";
import { ExpenseCategoryTitle } from "../expenseCategory/ExpenseCategoryTitle";
import { FeatureOrganizationTitle } from "../featureOrganization/FeatureOrganizationTitle";
import { GoalTitle } from "../goal/GoalTitle";
import { GoalGeneralSettingTitle } from "../goalGeneralSetting/GoalGeneralSettingTitle";
import { GoalKpiTitle } from "../goalKpi/GoalKpiTitle";
import { GoalKpiTemplateTitle } from "../goalKpiTemplate/GoalKpiTemplateTitle";
import { GoalTemplateTitle } from "../goalTemplate/GoalTemplateTitle";
import { GoalTimeFrameTitle } from "../goalTimeFrame/GoalTimeFrameTitle";
import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { IncomeTitle } from "../income/IncomeTitle";
import { IntegrationEntitySettingTitle } from "../integrationEntitySetting/IntegrationEntitySettingTitle";
import { IntegrationEntitySettingTiedTitle } from "../integrationEntitySettingTied/IntegrationEntitySettingTiedTitle";
import { IntegrationMapTitle } from "../integrationMap/IntegrationMapTitle";
import { IntegrationSettingTitle } from "../integrationSetting/IntegrationSettingTitle";
import { IntegrationTenantTitle } from "../integrationTenant/IntegrationTenantTitle";
import { InviteTitle } from "../invite/InviteTitle";
import { InvoiceEstimateHistoryTitle } from "../invoiceEstimateHistory/InvoiceEstimateHistoryTitle";
import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";
import { IssueTypeTitle } from "../issueType/IssueTypeTitle";
import { JobPresetTitle } from "../jobPreset/JobPresetTitle";
import { JobPresetUpworkJobSearchCriterionTitle } from "../jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionTitle";
import { JobSearchCategoryTitle } from "../jobSearchCategory/JobSearchCategoryTitle";
import { JobSearchOccupationTitle } from "../jobSearchOccupation/JobSearchOccupationTitle";
import { KeyResultTitle } from "../keyResult/KeyResultTitle";
import { KeyResultTemplateTitle } from "../keyResultTemplate/KeyResultTemplateTitle";
import { KeyResultUpdateTitle } from "../keyResultUpdate/KeyResultUpdateTitle";
import { KnowledgeBaseTitle } from "../knowledgeBase/KnowledgeBaseTitle";
import { KnowledgeBaseArticleTitle } from "../knowledgeBaseArticle/KnowledgeBaseArticleTitle";
import { KnowledgeBaseAuthorTitle } from "../knowledgeBaseAuthor/KnowledgeBaseAuthorTitle";
import { MerchantTitle } from "../merchant/MerchantTitle";
import { OrganizationAwardTitle } from "../organizationAward/OrganizationAwardTitle";
import { OrganizationContactTitle } from "../organizationContact/OrganizationContactTitle";
import { OrganizationDepartmentTitle } from "../organizationDepartment/OrganizationDepartmentTitle";
import { OrganizationDocumentTitle } from "../organizationDocument/OrganizationDocumentTitle";
import { OrganizationEmploymentTypeTitle } from "../organizationEmploymentType/OrganizationEmploymentTypeTitle";
import { OrganizationLanguageTitle } from "../organizationLanguage/OrganizationLanguageTitle";
import { OrganizationPositionTitle } from "../organizationPosition/OrganizationPositionTitle";
import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";
import { OrganizationRecurringExpenseTitle } from "../organizationRecurringExpense/OrganizationRecurringExpenseTitle";
import { OrganizationSprintTitle } from "../organizationSprint/OrganizationSprintTitle";
import { OrganizationTaskSettingTitle } from "../organizationTaskSetting/OrganizationTaskSettingTitle";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { OrganizationTeamEmployeeTitle } from "../organizationTeamEmployee/OrganizationTeamEmployeeTitle";
import { OrganizationTeamJoinRequestTitle } from "../organizationTeamJoinRequest/OrganizationTeamJoinRequestTitle";
import { OrganizationVendorTitle } from "../organizationVendor/OrganizationVendorTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { PipelineTitle } from "../pipeline/PipelineTitle";
import { PipelineStageTitle } from "../pipelineStage/PipelineStageTitle";
import { ProductTitle } from "../product/ProductTitle";
import { ProductCategoryTitle } from "../productCategory/ProductCategoryTitle";
import { ProductCategoryTranslationTitle } from "../productCategoryTranslation/ProductCategoryTranslationTitle";
import { ProductOptionTitle } from "../productOption/ProductOptionTitle";
import { ProductOptionGroupTitle } from "../productOptionGroup/ProductOptionGroupTitle";
import { ProductOptionGroupTranslationTitle } from "../productOptionGroupTranslation/ProductOptionGroupTranslationTitle";
import { ProductOptionTranslationTitle } from "../productOptionTranslation/ProductOptionTranslationTitle";
import { ProductTranslationTitle } from "../productTranslation/ProductTranslationTitle";
import { ProductTypeTitle } from "../productType/ProductTypeTitle";
import { ProductTypeTranslationTitle } from "../productTypeTranslation/ProductTypeTranslationTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";
import { ProductVariantPriceTitle } from "../productVariantPrice/ProductVariantPriceTitle";
import { ProductVariantSettingTitle } from "../productVariantSetting/ProductVariantSettingTitle";
import { ProposalTitle } from "../proposal/ProposalTitle";
import { ReportOrganizationTitle } from "../reportOrganization/ReportOrganizationTitle";
import { RequestApprovalTitle } from "../requestApproval/RequestApprovalTitle";
import { RequestApprovalEmployeeTitle } from "../requestApprovalEmployee/RequestApprovalEmployeeTitle";
import { RequestApprovalTeamTitle } from "../requestApprovalTeam/RequestApprovalTeamTitle";
import { ScreenshotTitle } from "../screenshot/ScreenshotTitle";
import { SkillTitle } from "../skill/SkillTitle";
import { SkillOrganizationTitle } from "../skillOrganization/SkillOrganizationTitle";
import { TagTitle } from "../tag/TagTitle";
import { TagOrganizationTitle } from "../tagOrganization/TagOrganizationTitle";
import { TaskTitle } from "../task/TaskTitle";
import { TaskLinkedIssueTitle } from "../taskLinkedIssue/TaskLinkedIssueTitle";
import { TaskPriorityTitle } from "../taskPriority/TaskPriorityTitle";
import { TaskRelatedIssueTypeTitle } from "../taskRelatedIssueType/TaskRelatedIssueTypeTitle";
import { TaskSizeTitle } from "../taskSize/TaskSizeTitle";
import { TaskStatusTitle } from "../taskStatus/TaskStatusTitle";
import { TaskVersionTitle } from "../taskVersion/TaskVersionTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { TimeLogTitle } from "../timeLog/TimeLogTitle";
import { TimeOffPolicyTitle } from "../timeOffPolicy/TimeOffPolicyTitle";
import { TimeOffRequestTitle } from "../timeOffRequest/TimeOffRequestTitle";
import { TimesheetTitle } from "../timesheet/TimesheetTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";
import { TimeSlotMinuteTitle } from "../timeSlotMinute/TimeSlotMinuteTitle";
import { UserOrganizationTitle } from "../userOrganization/UserOrganizationTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";
import { WarehouseProductTitle } from "../warehouseProduct/WarehouseProductTitle";
import { WarehouseProductVariantTitle } from "../warehouseProductVariant/WarehouseProductVariantTitle";

export const OrganizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accountingTemplate"
          reference="AccountingTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountingTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="activity"
          reference="Activity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActivityTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Activity Proof Duration"
          source="activityProofDuration"
        />
        <BooleanInput label="Allow Delete Time" source="allowDeleteTime" />
        <BooleanInput label="Allow Manual Time" source="allowManualTime" />
        <BooleanInput label="Allow Modify Time" source="allowModifyTime" />
        <BooleanInput
          label="Allow Screenshot Capture"
          source="allowScreenshotCapture"
        />
        <BooleanInput
          label="Allow Track Inactivity"
          source="allowTrackInactivity"
        />
        <ReferenceArrayInput
          source="appointmentEmployee"
          reference="AppointmentEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="approvalPolicy"
          reference="ApprovalPolicy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApprovalPolicyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="availabilitySlot"
          reference="AvailabilitySlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AvailabilitySlotTitle} />
        </ReferenceArrayInput>
        <TextInput label="Banner" source="banner" />
        <NumberInput
          step={1}
          label="Bonus Percentage"
          source="bonusPercentage"
        />
        <TextInput label="Bonus Type" source="bonusType" />
        <TextInput label="Brand Color" source="brandColor" />
        <ReferenceArrayInput
          source="candidate"
          reference="Candidate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateCriterionRating"
          reference="CandidateCriterionRating"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateCriterionRatingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateDocument"
          reference="CandidateDocument"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateDocumentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateEducation"
          reference="CandidateEducation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateEducationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateExperience"
          reference="CandidateExperience"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateExperienceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateFeedback"
          reference="CandidateFeedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateFeedbackTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateInterview"
          reference="CandidateInterview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateInterviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateInterviewer"
          reference="CandidateInterviewer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateInterviewerTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidatePersonalQuality"
          reference="CandidatePersonalQuality"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidatePersonalQualityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateSkill"
          reference="CandidateSkill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateSkillTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateSource"
          reference="CandidateSource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateSourceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="candidateTechnology"
          reference="CandidateTechnology"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CandidateTechnologyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="changelog"
          reference="Changelog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChangelogTitle} />
        </ReferenceArrayInput>
        <TextInput label="Client Focus" source="clientFocus" />
        <ReferenceArrayInput
          source="contactContactOrganizationIdToorganization"
          reference="Contact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContactTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="contactOrganizationContactIdTocontact.id"
          reference="Contact"
          label="Contact Organization Contact Id Tocontact"
        >
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <BooleanInput
          label="Convert Accepted Estimates"
          source="convertAcceptedEstimates"
        />
        <TextInput label="Currency" source="currency" />
        <TextInput label="Currency Position" source="currencyPosition" />
        <ReferenceArrayInput
          source="customSmtp"
          reference="CustomSmtp"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomSmtpTitle} />
        </ReferenceArrayInput>
        <TextInput label="Date Format" source="dateFormat" />
        <NumberInput step={1} label="Days Until Due" source="daysUntilDue" />
        <ReferenceArrayInput
          source="deal"
          reference="Deal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DealTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="Default Alignment Type"
          source="defaultAlignmentType"
        />
        <TextInput label="Default End Time" source="defaultEndTime" />
        <TextInput
          label="Default Invoice Estimate Terms"
          source="defaultInvoiceEstimateTerms"
        />
        <TextInput label="Default Start Time" source="defaultStartTime" />
        <SelectInput
          source="defaultValueDateType"
          label="Default Value Date Type"
          choices={[
            { label: "TODAY", value: "TODAY" },
            { label: "END_OF_MONTH", value: "END_OF_MONTH" },
            { label: "START_OF_MONTH", value: "START_OF_MONTH" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="Discount After Tax" source="discountAfterTax" />
        <ReferenceArrayInput
          source="emailSent"
          reference="EmailSent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmailSentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="emailTemplate"
          reference="EmailTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmailTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employee"
          reference="Employee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeAppointment"
          reference="EmployeeAppointment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeAppointmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeAward"
          reference="EmployeeAward"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeAwardTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeLevel"
          reference="EmployeeLevel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeLevelTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeePhone"
          reference="EmployeePhone"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeePhoneTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeProposalTemplate"
          reference="EmployeeProposalTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeProposalTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeRecurringExpense"
          reference="EmployeeRecurringExpense"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeRecurringExpenseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeSetting"
          reference="EmployeeSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeSettingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeUpworkJobSearchCriterion"
          reference="EmployeeUpworkJobSearchCriterion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput
            optionText={EmployeeUpworkJobSearchCriterionTitle}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="equipment"
          reference="Equipment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquipmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="equipmentSharing"
          reference="EquipmentSharing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquipmentSharingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="equipmentSharingPolicy"
          reference="EquipmentSharingPolicy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquipmentSharingPolicyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="estimateEmail"
          reference="EstimateEmail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EstimateEmailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="eventType"
          reference="EventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="expense"
          reference="Expense"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExpenseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="expenseCategory"
          reference="ExpenseCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExpenseCategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="featureOrganization"
          reference="FeatureOrganization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeatureOrganizationTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Fiscal End Date" source="fiscalEndDate" />
        <TextInput label="Fiscal Information" source="fiscalInformation" />
        <DateTimeInput label="Fiscal Start Date" source="fiscalStartDate" />
        <BooleanInput label="Future Date Allowed" source="futureDateAllowed" />
        <ReferenceArrayInput
          source="goal"
          reference="Goal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goalGeneralSetting"
          reference="GoalGeneralSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalGeneralSettingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goalKpi"
          reference="GoalKpi"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalKpiTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goalKpiTemplate"
          reference="GoalKpiTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalKpiTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goalTemplate"
          reference="GoalTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goalTimeFrame"
          reference="GoalTimeFrame"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalTimeFrameTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="imageAssetImageAssetOrganizationIdToorganization"
          reference="ImageAsset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImageAssetTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="imageAssetOrganizationImageIdToimageAsset.id"
          reference="ImageAsset"
          label="Image Asset Organization Image Id Toimage Asset"
        >
          <SelectInput optionText={ImageAssetTitle} />
        </ReferenceInput>
        <TextInput label="Image Url" source="imageUrl" />
        <NumberInput
          step={1}
          label="Inactivity Time Limit"
          source="inactivityTimeLimit"
        />
        <ReferenceArrayInput
          source="income"
          reference="Income"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IncomeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="integrationEntitySetting"
          reference="IntegrationEntitySetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationEntitySettingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="integrationEntitySettingTied"
          reference="IntegrationEntitySettingTied"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationEntitySettingTiedTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="integrationMap"
          reference="IntegrationMap"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationMapTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="integrationSetting"
          reference="IntegrationSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationSettingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="integrationTenant"
          reference="IntegrationTenant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationTenantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invite"
          reference="Invite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Invite Expiry Period"
          source="inviteExpiryPeriod"
        />
        <BooleanInput label="Invites Allowed" source="invitesAllowed" />
        <ReferenceArrayInput
          source="invoiceEstimateHistory"
          reference="InvoiceEstimateHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceEstimateHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invoiceInvoiceFromOrganizationIdToorganization"
          reference="Invoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invoiceInvoiceOrganizationIdToorganization"
          reference="Invoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invoiceItem"
          reference="InvoiceItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceItemTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Default" source="isDefault" />
        <BooleanInput label="Is Remove Idle Time" source="isRemoveIdleTime" />
        <ReferenceArrayInput
          source="issueType"
          reference="IssueType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IssueTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobPreset"
          reference="JobPreset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobPresetTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobPresetUpworkJobSearchCriterion"
          reference="JobPresetUpworkJobSearchCriterion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput
            optionText={JobPresetUpworkJobSearchCriterionTitle}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobSearchCategory"
          reference="JobSearchCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobSearchCategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobSearchOccupation"
          reference="JobSearchOccupation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobSearchOccupationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="keyResult"
          reference="KeyResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyResultTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="keyResultTemplate"
          reference="KeyResultTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyResultTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="keyResultUpdate"
          reference="KeyResultUpdate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyResultUpdateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="knowledgeBase"
          reference="KnowledgeBase"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KnowledgeBaseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="knowledgeBaseArticle"
          reference="KnowledgeBaseArticle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KnowledgeBaseArticleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="knowledgeBaseAuthor"
          reference="KnowledgeBaseAuthor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KnowledgeBaseAuthorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="merchant"
          reference="Merchant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MerchantTitle} />
        </ReferenceArrayInput>
        <TextInput label="Minimum Project Size" source="minimumProjectSize" />
        <TextInput label="Name" source="name" />
        <TextInput label="Number Format" source="numberFormat" />
        <TextInput label="Official Name" source="officialName" />
        <ReferenceArrayInput
          source="organizationAward"
          reference="OrganizationAward"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationAwardTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationContact"
          reference="OrganizationContact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationContactTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationDepartment"
          reference="OrganizationDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationDepartmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationDocument"
          reference="OrganizationDocument"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationDocumentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationEmploymentType"
          reference="OrganizationEmploymentType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationEmploymentTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationLanguage"
          reference="OrganizationLanguage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationLanguageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationPosition"
          reference="OrganizationPosition"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationPositionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationProject"
          reference="OrganizationProject"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationProjectTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationRecurringExpense"
          reference="OrganizationRecurringExpense"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationRecurringExpenseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationSprint"
          reference="OrganizationSprint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationSprintTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationTaskSetting"
          reference="OrganizationTaskSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTaskSettingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationTeam"
          reference="OrganizationTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTeamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationTeamEmployee"
          reference="OrganizationTeamEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTeamEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationTeamJoinRequest"
          reference="OrganizationTeamJoinRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTeamJoinRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationVendor"
          reference="OrganizationVendor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationVendorTitle} />
        </ReferenceArrayInput>
        <TextInput label="Overview" source="overview" />
        <ReferenceArrayInput
          source="payment"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="pipeline"
          reference="Pipeline"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PipelineTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="pipelineStage"
          reference="PipelineStage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PipelineStageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="product"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productCategory"
          reference="ProductCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productCategoryTranslation"
          reference="ProductCategoryTranslation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductCategoryTranslationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productOption"
          reference="ProductOption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductOptionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productOptionGroup"
          reference="ProductOptionGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductOptionGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productOptionGroupTranslation"
          reference="ProductOptionGroupTranslation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductOptionGroupTranslationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productOptionTranslation"
          reference="ProductOptionTranslation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductOptionTranslationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productTranslation"
          reference="ProductTranslation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTranslationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productType"
          reference="ProductType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productTypeTranslation"
          reference="ProductTypeTranslation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTypeTranslationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productVariant"
          reference="ProductVariant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductVariantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productVariantPrice"
          reference="ProductVariantPrice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductVariantPriceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productVariantSetting"
          reference="ProductVariantSetting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductVariantSettingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Profile Link" source="profileLink" />
        <ReferenceArrayInput
          source="proposal"
          reference="Proposal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProposalTitle} />
        </ReferenceArrayInput>
        <TextInput label="Region Code" source="regionCode" />
        <DateTimeInput label="Registration Date" source="registrationDate" />
        <ReferenceArrayInput
          source="reportOrganization"
          reference="ReportOrganization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportOrganizationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requestApproval"
          reference="RequestApproval"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestApprovalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requestApprovalEmployee"
          reference="RequestApprovalEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestApprovalEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requestApprovalTeam"
          reference="RequestApprovalTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestApprovalTeamTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Require Client" source="requireClient" />
        <BooleanInput label="Require Description" source="requireDescription" />
        <BooleanInput label="Require Project" source="requireProject" />
        <BooleanInput label="Require Reason" source="requireReason" />
        <BooleanInput label="Require Task" source="requireTask" />
        <ReferenceArrayInput
          source="screenshot"
          reference="Screenshot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScreenshotTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          label="Separate Invoice Item Tax And Discount"
          source="separateInvoiceItemTaxAndDiscount"
        />
        <TextInput label="Short Description" source="shortDescription" />
        <BooleanInput label="Show Bonuses Paid" source="showBonusesPaid" />
        <BooleanInput label="Show Clients" source="showClients" />
        <BooleanInput label="Show Clients Count" source="showClientsCount" />
        <BooleanInput
          label="Show Employees Count"
          source="showEmployeesCount"
        />
        <BooleanInput label="Show Income" source="showIncome" />
        <BooleanInput
          label="Show Minimum Project Size"
          source="showMinimumProjectSize"
        />
        <BooleanInput label="Show Profits" source="showProfits" />
        <BooleanInput label="Show Projects Count" source="showProjectsCount" />
        <BooleanInput label="Show Total Hours" source="showTotalHours" />
        <ReferenceArrayInput
          source="skill"
          reference="Skill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="skillOrganization"
          reference="SkillOrganization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillOrganizationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Start Week On" source="startWeekOn" />
        <ReferenceArrayInput
          source="tag"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganization"
          reference="TagOrganization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="task"
          reference="Task"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskLinkedIssues"
          reference="TaskLinkedIssue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskLinkedIssueTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskPriority"
          reference="TaskPriority"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskPriorityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskRelatedIssueType"
          reference="TaskRelatedIssueType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskRelatedIssueTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskSize"
          reference="TaskSize"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskSizeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskStatus"
          reference="TaskStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskStatusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskVersion"
          reference="TaskVersion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskVersionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Tax Id" source="taxId" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Time Format" source="timeFormat" />
        <ReferenceArrayInput
          source="timeLog"
          reference="TimeLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeLogTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeOffPolicy"
          reference="TimeOffPolicy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeOffPolicyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeOffRequest"
          reference="TimeOffRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeOffRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timesheet"
          reference="Timesheet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimesheetTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeSlot"
          reference="TimeSlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeSlotTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeSlotMinute"
          reference="TimeSlotMinute"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeSlotMinuteTitle} />
        </ReferenceArrayInput>
        <TextInput label="Time Zone" source="timeZone" />
        <NumberInput step={1} label="Total Employees" source="totalEmployees" />
        <TextInput
          label="Upwork Organization Id"
          source="upworkOrganizationId"
        />
        <ReferenceArrayInput
          source="userOrganization"
          reference="UserOrganization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserOrganizationTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Value Date" source="valueDate" />
        <ReferenceArrayInput
          source="warehouse"
          reference="Warehouse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WarehouseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="warehouseProduct"
          reference="WarehouseProduct"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WarehouseProductTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="warehouseProductVariant"
          reference="WarehouseProductVariant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WarehouseProductVariantTitle} />
        </ReferenceArrayInput>
        <TextInput label="Website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
