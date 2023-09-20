import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AccountingTemplateListRelationFilter } from "../accountingTemplate/AccountingTemplateListRelationFilter";
import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { AppointmentEmployeeListRelationFilter } from "../appointmentEmployee/AppointmentEmployeeListRelationFilter";
import { ApprovalPolicyListRelationFilter } from "../approvalPolicy/ApprovalPolicyListRelationFilter";
import { AvailabilitySlotListRelationFilter } from "../availabilitySlot/AvailabilitySlotListRelationFilter";
import { CandidateListRelationFilter } from "../candidate/CandidateListRelationFilter";
import { CandidateCriterionRatingListRelationFilter } from "../candidateCriterionRating/CandidateCriterionRatingListRelationFilter";
import { CandidateDocumentListRelationFilter } from "../candidateDocument/CandidateDocumentListRelationFilter";
import { CandidateEducationListRelationFilter } from "../candidateEducation/CandidateEducationListRelationFilter";
import { CandidateExperienceListRelationFilter } from "../candidateExperience/CandidateExperienceListRelationFilter";
import { CandidateFeedbackListRelationFilter } from "../candidateFeedback/CandidateFeedbackListRelationFilter";
import { CandidateInterviewListRelationFilter } from "../candidateInterview/CandidateInterviewListRelationFilter";
import { CandidateInterviewerListRelationFilter } from "../candidateInterviewer/CandidateInterviewerListRelationFilter";
import { CandidatePersonalQualityListRelationFilter } from "../candidatePersonalQuality/CandidatePersonalQualityListRelationFilter";
import { CandidateSkillListRelationFilter } from "../candidateSkill/CandidateSkillListRelationFilter";
import { CandidateSourceListRelationFilter } from "../candidateSource/CandidateSourceListRelationFilter";
import { CandidateTechnologyListRelationFilter } from "../candidateTechnology/CandidateTechnologyListRelationFilter";
import { ChangelogListRelationFilter } from "../changelog/ChangelogListRelationFilter";
import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { CustomSmtpListRelationFilter } from "../customSmtp/CustomSmtpListRelationFilter";
import { DealListRelationFilter } from "../deal/DealListRelationFilter";
import { EmailResetListRelationFilter } from "../emailReset/EmailResetListRelationFilter";
import { EmailSentListRelationFilter } from "../emailSent/EmailSentListRelationFilter";
import { EmailTemplateListRelationFilter } from "../emailTemplate/EmailTemplateListRelationFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { EmployeeAppointmentListRelationFilter } from "../employeeAppointment/EmployeeAppointmentListRelationFilter";
import { EmployeeAwardListRelationFilter } from "../employeeAward/EmployeeAwardListRelationFilter";
import { EmployeeLevelListRelationFilter } from "../employeeLevel/EmployeeLevelListRelationFilter";
import { EmployeePhoneListRelationFilter } from "../employeePhone/EmployeePhoneListRelationFilter";
import { EmployeeProposalTemplateListRelationFilter } from "../employeeProposalTemplate/EmployeeProposalTemplateListRelationFilter";
import { EmployeeRecurringExpenseListRelationFilter } from "../employeeRecurringExpense/EmployeeRecurringExpenseListRelationFilter";
import { EmployeeSettingListRelationFilter } from "../employeeSetting/EmployeeSettingListRelationFilter";
import { EmployeeUpworkJobSearchCriterionListRelationFilter } from "../employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionListRelationFilter";
import { EquipmentListRelationFilter } from "../equipment/EquipmentListRelationFilter";
import { EquipmentSharingListRelationFilter } from "../equipmentSharing/EquipmentSharingListRelationFilter";
import { EquipmentSharingPolicyListRelationFilter } from "../equipmentSharingPolicy/EquipmentSharingPolicyListRelationFilter";
import { EstimateEmailListRelationFilter } from "../estimateEmail/EstimateEmailListRelationFilter";
import { EventTypeListRelationFilter } from "../eventType/EventTypeListRelationFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { ExpenseCategoryListRelationFilter } from "../expenseCategory/ExpenseCategoryListRelationFilter";
import { FeatureOrganizationListRelationFilter } from "../featureOrganization/FeatureOrganizationListRelationFilter";
import { GoalListRelationFilter } from "../goal/GoalListRelationFilter";
import { GoalGeneralSettingListRelationFilter } from "../goalGeneralSetting/GoalGeneralSettingListRelationFilter";
import { GoalKpiListRelationFilter } from "../goalKpi/GoalKpiListRelationFilter";
import { GoalKpiTemplateListRelationFilter } from "../goalKpiTemplate/GoalKpiTemplateListRelationFilter";
import { GoalTemplateListRelationFilter } from "../goalTemplate/GoalTemplateListRelationFilter";
import { GoalTimeFrameListRelationFilter } from "../goalTimeFrame/GoalTimeFrameListRelationFilter";
import { ImageAssetListRelationFilter } from "../imageAsset/ImageAssetListRelationFilter";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { ImportHistoryListRelationFilter } from "../importHistory/ImportHistoryListRelationFilter";
import { ImportRecordListRelationFilter } from "../importRecord/ImportRecordListRelationFilter";
import { IncomeListRelationFilter } from "../income/IncomeListRelationFilter";
import { IntegrationEntitySettingListRelationFilter } from "../integrationEntitySetting/IntegrationEntitySettingListRelationFilter";
import { IntegrationEntitySettingTiedListRelationFilter } from "../integrationEntitySettingTied/IntegrationEntitySettingTiedListRelationFilter";
import { IntegrationMapListRelationFilter } from "../integrationMap/IntegrationMapListRelationFilter";
import { IntegrationSettingListRelationFilter } from "../integrationSetting/IntegrationSettingListRelationFilter";
import { IntegrationTenantListRelationFilter } from "../integrationTenant/IntegrationTenantListRelationFilter";
import { InviteListRelationFilter } from "../invite/InviteListRelationFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { InvoiceEstimateHistoryListRelationFilter } from "../invoiceEstimateHistory/InvoiceEstimateHistoryListRelationFilter";
import { InvoiceItemListRelationFilter } from "../invoiceItem/InvoiceItemListRelationFilter";
import { IssueTypeListRelationFilter } from "../issueType/IssueTypeListRelationFilter";
import { JobPresetListRelationFilter } from "../jobPreset/JobPresetListRelationFilter";
import { JobPresetUpworkJobSearchCriterionListRelationFilter } from "../jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionListRelationFilter";
import { JobSearchCategoryListRelationFilter } from "../jobSearchCategory/JobSearchCategoryListRelationFilter";
import { JobSearchOccupationListRelationFilter } from "../jobSearchOccupation/JobSearchOccupationListRelationFilter";
import { KeyResultListRelationFilter } from "../keyResult/KeyResultListRelationFilter";
import { KeyResultTemplateListRelationFilter } from "../keyResultTemplate/KeyResultTemplateListRelationFilter";
import { KeyResultUpdateListRelationFilter } from "../keyResultUpdate/KeyResultUpdateListRelationFilter";
import { KnowledgeBaseListRelationFilter } from "../knowledgeBase/KnowledgeBaseListRelationFilter";
import { KnowledgeBaseArticleListRelationFilter } from "../knowledgeBaseArticle/KnowledgeBaseArticleListRelationFilter";
import { KnowledgeBaseAuthorListRelationFilter } from "../knowledgeBaseAuthor/KnowledgeBaseAuthorListRelationFilter";
import { MerchantListRelationFilter } from "../merchant/MerchantListRelationFilter";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";
import { OrganizationAwardListRelationFilter } from "../organizationAward/OrganizationAwardListRelationFilter";
import { OrganizationContactListRelationFilter } from "../organizationContact/OrganizationContactListRelationFilter";
import { OrganizationDepartmentListRelationFilter } from "../organizationDepartment/OrganizationDepartmentListRelationFilter";
import { OrganizationDocumentListRelationFilter } from "../organizationDocument/OrganizationDocumentListRelationFilter";
import { OrganizationEmploymentTypeListRelationFilter } from "../organizationEmploymentType/OrganizationEmploymentTypeListRelationFilter";
import { OrganizationLanguageListRelationFilter } from "../organizationLanguage/OrganizationLanguageListRelationFilter";
import { OrganizationPositionListRelationFilter } from "../organizationPosition/OrganizationPositionListRelationFilter";
import { OrganizationProjectListRelationFilter } from "../organizationProject/OrganizationProjectListRelationFilter";
import { OrganizationRecurringExpenseListRelationFilter } from "../organizationRecurringExpense/OrganizationRecurringExpenseListRelationFilter";
import { OrganizationSprintListRelationFilter } from "../organizationSprint/OrganizationSprintListRelationFilter";
import { OrganizationTaskSettingListRelationFilter } from "../organizationTaskSetting/OrganizationTaskSettingListRelationFilter";
import { OrganizationTeamListRelationFilter } from "../organizationTeam/OrganizationTeamListRelationFilter";
import { OrganizationTeamEmployeeListRelationFilter } from "../organizationTeamEmployee/OrganizationTeamEmployeeListRelationFilter";
import { OrganizationTeamJoinRequestListRelationFilter } from "../organizationTeamJoinRequest/OrganizationTeamJoinRequestListRelationFilter";
import { OrganizationVendorListRelationFilter } from "../organizationVendor/OrganizationVendorListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { PipelineListRelationFilter } from "../pipeline/PipelineListRelationFilter";
import { PipelineStageListRelationFilter } from "../pipelineStage/PipelineStageListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { ProductCategoryListRelationFilter } from "../productCategory/ProductCategoryListRelationFilter";
import { ProductCategoryTranslationListRelationFilter } from "../productCategoryTranslation/ProductCategoryTranslationListRelationFilter";
import { ProductOptionListRelationFilter } from "../productOption/ProductOptionListRelationFilter";
import { ProductOptionGroupListRelationFilter } from "../productOptionGroup/ProductOptionGroupListRelationFilter";
import { ProductOptionGroupTranslationListRelationFilter } from "../productOptionGroupTranslation/ProductOptionGroupTranslationListRelationFilter";
import { ProductOptionTranslationListRelationFilter } from "../productOptionTranslation/ProductOptionTranslationListRelationFilter";
import { ProductTranslationListRelationFilter } from "../productTranslation/ProductTranslationListRelationFilter";
import { ProductTypeListRelationFilter } from "../productType/ProductTypeListRelationFilter";
import { ProductTypeTranslationListRelationFilter } from "../productTypeTranslation/ProductTypeTranslationListRelationFilter";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";
import { ProductVariantPriceListRelationFilter } from "../productVariantPrice/ProductVariantPriceListRelationFilter";
import { ProductVariantSettingListRelationFilter } from "../productVariantSetting/ProductVariantSettingListRelationFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";
import { ReportOrganizationListRelationFilter } from "../reportOrganization/ReportOrganizationListRelationFilter";
import { RequestApprovalListRelationFilter } from "../requestApproval/RequestApprovalListRelationFilter";
import { RequestApprovalEmployeeListRelationFilter } from "../requestApprovalEmployee/RequestApprovalEmployeeListRelationFilter";
import { RequestApprovalTeamListRelationFilter } from "../requestApprovalTeam/RequestApprovalTeamListRelationFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";
import { RolePermissionListRelationFilter } from "../rolePermission/RolePermissionListRelationFilter";
import { ScreenshotListRelationFilter } from "../screenshot/ScreenshotListRelationFilter";
import { SkillListRelationFilter } from "../skill/SkillListRelationFilter";
import { TagListRelationFilter } from "../tag/TagListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { TaskLinkedIssueListRelationFilter } from "../taskLinkedIssue/TaskLinkedIssueListRelationFilter";
import { TaskPriorityListRelationFilter } from "../taskPriority/TaskPriorityListRelationFilter";
import { TaskRelatedIssueTypeListRelationFilter } from "../taskRelatedIssueType/TaskRelatedIssueTypeListRelationFilter";
import { TaskSizeListRelationFilter } from "../taskSize/TaskSizeListRelationFilter";
import { TaskStatusListRelationFilter } from "../taskStatus/TaskStatusListRelationFilter";
import { TaskVersionListRelationFilter } from "../taskVersion/TaskVersionListRelationFilter";
import { TenantSettingListRelationFilter } from "../tenantSetting/TenantSettingListRelationFilter";
import { TimeLogListRelationFilter } from "../timeLog/TimeLogListRelationFilter";
import { TimeOffPolicyListRelationFilter } from "../timeOffPolicy/TimeOffPolicyListRelationFilter";
import { TimeOffRequestListRelationFilter } from "../timeOffRequest/TimeOffRequestListRelationFilter";
import { TimeSlotListRelationFilter } from "../timeSlot/TimeSlotListRelationFilter";
import { TimeSlotMinuteListRelationFilter } from "../timeSlotMinute/TimeSlotMinuteListRelationFilter";
import { TimesheetListRelationFilter } from "../timesheet/TimesheetListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { UserOrganizationListRelationFilter } from "../userOrganization/UserOrganizationListRelationFilter";
import { WarehouseListRelationFilter } from "../warehouse/WarehouseListRelationFilter";
import { WarehouseProductListRelationFilter } from "../warehouseProduct/WarehouseProductListRelationFilter";
import { WarehouseProductVariantListRelationFilter } from "../warehouseProductVariant/WarehouseProductVariantListRelationFilter";

export type TenantWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  logo?: StringNullableFilter;
  accountingTemplate?: AccountingTemplateListRelationFilter;
  activity?: ActivityListRelationFilter;
  appointmentEmployee?: AppointmentEmployeeListRelationFilter;
  approvalPolicy?: ApprovalPolicyListRelationFilter;
  availabilitySlot?: AvailabilitySlotListRelationFilter;
  candidate?: CandidateListRelationFilter;
  candidateCriterionRating?: CandidateCriterionRatingListRelationFilter;
  candidateDocument?: CandidateDocumentListRelationFilter;
  candidateEducation?: CandidateEducationListRelationFilter;
  candidateExperience?: CandidateExperienceListRelationFilter;
  candidateFeedback?: CandidateFeedbackListRelationFilter;
  candidateInterview?: CandidateInterviewListRelationFilter;
  candidateInterviewer?: CandidateInterviewerListRelationFilter;
  candidatePersonalQuality?: CandidatePersonalQualityListRelationFilter;
  candidateSkill?: CandidateSkillListRelationFilter;
  candidateSource?: CandidateSourceListRelationFilter;
  candidateTechnology?: CandidateTechnologyListRelationFilter;
  changelog?: ChangelogListRelationFilter;
  contact?: ContactListRelationFilter;
  customSmtp?: CustomSmtpListRelationFilter;
  deal?: DealListRelationFilter;
  emailReset?: EmailResetListRelationFilter;
  emailSent?: EmailSentListRelationFilter;
  emailTemplate?: EmailTemplateListRelationFilter;
  employee?: EmployeeListRelationFilter;
  employeeAppointment?: EmployeeAppointmentListRelationFilter;
  employeeAward?: EmployeeAwardListRelationFilter;
  employeeLevel?: EmployeeLevelListRelationFilter;
  employeePhone?: EmployeePhoneListRelationFilter;
  employeeProposalTemplate?: EmployeeProposalTemplateListRelationFilter;
  employeeRecurringExpense?: EmployeeRecurringExpenseListRelationFilter;
  employeeSetting?: EmployeeSettingListRelationFilter;
  employeeUpworkJobSearchCriterion?: EmployeeUpworkJobSearchCriterionListRelationFilter;
  equipment?: EquipmentListRelationFilter;
  equipmentSharing?: EquipmentSharingListRelationFilter;
  equipmentSharingPolicy?: EquipmentSharingPolicyListRelationFilter;
  estimateEmail?: EstimateEmailListRelationFilter;
  eventType?: EventTypeListRelationFilter;
  expense?: ExpenseListRelationFilter;
  expenseCategory?: ExpenseCategoryListRelationFilter;
  featureOrganization?: FeatureOrganizationListRelationFilter;
  goal?: GoalListRelationFilter;
  goalGeneralSetting?: GoalGeneralSettingListRelationFilter;
  goalKpi?: GoalKpiListRelationFilter;
  goalKpiTemplate?: GoalKpiTemplateListRelationFilter;
  goalTemplate?: GoalTemplateListRelationFilter;
  goalTimeFrame?: GoalTimeFrameListRelationFilter;
  imageAssetImageAssetTenantIdTotenant?: ImageAssetListRelationFilter;
  imageAssetTenantImageIdToimageAsset?: ImageAssetWhereUniqueInput;
  importHistory?: ImportHistoryListRelationFilter;
  importRecord?: ImportRecordListRelationFilter;
  income?: IncomeListRelationFilter;
  integrationEntitySetting?: IntegrationEntitySettingListRelationFilter;
  integrationEntitySettingTied?: IntegrationEntitySettingTiedListRelationFilter;
  integrationMap?: IntegrationMapListRelationFilter;
  integrationSetting?: IntegrationSettingListRelationFilter;
  integrationTenant?: IntegrationTenantListRelationFilter;
  invite?: InviteListRelationFilter;
  invoice?: InvoiceListRelationFilter;
  invoiceEstimateHistory?: InvoiceEstimateHistoryListRelationFilter;
  invoiceItem?: InvoiceItemListRelationFilter;
  issueType?: IssueTypeListRelationFilter;
  jobPreset?: JobPresetListRelationFilter;
  jobPresetUpworkJobSearchCriterion?: JobPresetUpworkJobSearchCriterionListRelationFilter;
  jobSearchCategory?: JobSearchCategoryListRelationFilter;
  jobSearchOccupation?: JobSearchOccupationListRelationFilter;
  keyResult?: KeyResultListRelationFilter;
  keyResultTemplate?: KeyResultTemplateListRelationFilter;
  keyResultUpdate?: KeyResultUpdateListRelationFilter;
  knowledgeBase?: KnowledgeBaseListRelationFilter;
  knowledgeBaseArticle?: KnowledgeBaseArticleListRelationFilter;
  knowledgeBaseAuthor?: KnowledgeBaseAuthorListRelationFilter;
  merchant?: MerchantListRelationFilter;
  organization?: OrganizationListRelationFilter;
  organizationAward?: OrganizationAwardListRelationFilter;
  organizationContact?: OrganizationContactListRelationFilter;
  organizationDepartment?: OrganizationDepartmentListRelationFilter;
  organizationDocument?: OrganizationDocumentListRelationFilter;
  organizationEmploymentType?: OrganizationEmploymentTypeListRelationFilter;
  organizationLanguage?: OrganizationLanguageListRelationFilter;
  organizationPosition?: OrganizationPositionListRelationFilter;
  organizationProject?: OrganizationProjectListRelationFilter;
  organizationRecurringExpense?: OrganizationRecurringExpenseListRelationFilter;
  organizationSprint?: OrganizationSprintListRelationFilter;
  organizationTaskSetting?: OrganizationTaskSettingListRelationFilter;
  organizationTeam?: OrganizationTeamListRelationFilter;
  organizationTeamEmployee?: OrganizationTeamEmployeeListRelationFilter;
  organizationTeamJoinRequest?: OrganizationTeamJoinRequestListRelationFilter;
  organizationVendor?: OrganizationVendorListRelationFilter;
  payment?: PaymentListRelationFilter;
  pipeline?: PipelineListRelationFilter;
  pipelineStage?: PipelineStageListRelationFilter;
  product?: ProductListRelationFilter;
  productCategory?: ProductCategoryListRelationFilter;
  productCategoryTranslation?: ProductCategoryTranslationListRelationFilter;
  productOption?: ProductOptionListRelationFilter;
  productOptionGroup?: ProductOptionGroupListRelationFilter;
  productOptionGroupTranslation?: ProductOptionGroupTranslationListRelationFilter;
  productOptionTranslation?: ProductOptionTranslationListRelationFilter;
  productTranslation?: ProductTranslationListRelationFilter;
  productType?: ProductTypeListRelationFilter;
  productTypeTranslation?: ProductTypeTranslationListRelationFilter;
  productVariant?: ProductVariantListRelationFilter;
  productVariantPrice?: ProductVariantPriceListRelationFilter;
  productVariantSetting?: ProductVariantSettingListRelationFilter;
  proposal?: ProposalListRelationFilter;
  reportOrganization?: ReportOrganizationListRelationFilter;
  requestApproval?: RequestApprovalListRelationFilter;
  requestApprovalEmployee?: RequestApprovalEmployeeListRelationFilter;
  requestApprovalTeam?: RequestApprovalTeamListRelationFilter;
  role?: RoleListRelationFilter;
  rolePermission?: RolePermissionListRelationFilter;
  screenshot?: ScreenshotListRelationFilter;
  skill?: SkillListRelationFilter;
  tag?: TagListRelationFilter;
  task?: TaskListRelationFilter;
  taskLinkedIssues?: TaskLinkedIssueListRelationFilter;
  taskPriority?: TaskPriorityListRelationFilter;
  taskRelatedIssueType?: TaskRelatedIssueTypeListRelationFilter;
  taskSize?: TaskSizeListRelationFilter;
  taskStatus?: TaskStatusListRelationFilter;
  taskVersion?: TaskVersionListRelationFilter;
  tenantSetting?: TenantSettingListRelationFilter;
  timeLog?: TimeLogListRelationFilter;
  timeOffPolicy?: TimeOffPolicyListRelationFilter;
  timeOffRequest?: TimeOffRequestListRelationFilter;
  timeSlot?: TimeSlotListRelationFilter;
  timeSlotMinute?: TimeSlotMinuteListRelationFilter;
  timesheet?: TimesheetListRelationFilter;
  user?: UserListRelationFilter;
  userOrganization?: UserOrganizationListRelationFilter;
  warehouse?: WarehouseListRelationFilter;
  warehouseProduct?: WarehouseProductListRelationFilter;
  warehouseProductVariant?: WarehouseProductVariantListRelationFilter;
};