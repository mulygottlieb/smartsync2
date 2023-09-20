import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { AccountingTemplateModule } from "./accountingTemplate/accountingTemplate.module";
import { ActivityModule } from "./activity/activity.module";
import { AppointmentEmployeeModule } from "./appointmentEmployee/appointmentEmployee.module";
import { ApprovalPolicyModule } from "./approvalPolicy/approvalPolicy.module";
import { AvailabilitySlotModule } from "./availabilitySlot/availabilitySlot.module";
import { CandidateModule } from "./candidate/candidate.module";
import { CandidateCriterionRatingModule } from "./candidateCriterionRating/candidateCriterionRating.module";
import { CandidateDepartmentModule } from "./candidateDepartment/candidateDepartment.module";
import { CandidateDocumentModule } from "./candidateDocument/candidateDocument.module";
import { CandidateEducationModule } from "./candidateEducation/candidateEducation.module";
import { CandidateEmploymentTypeModule } from "./candidateEmploymentType/candidateEmploymentType.module";
import { CandidateExperienceModule } from "./candidateExperience/candidateExperience.module";
import { CandidateFeedbackModule } from "./candidateFeedback/candidateFeedback.module";
import { CandidateInterviewModule } from "./candidateInterview/candidateInterview.module";
import { CandidateInterviewerModule } from "./candidateInterviewer/candidateInterviewer.module";
import { CandidatePersonalQualityModule } from "./candidatePersonalQuality/candidatePersonalQuality.module";
import { CandidateSkillModule } from "./candidateSkill/candidateSkill.module";
import { CandidateSourceModule } from "./candidateSource/candidateSource.module";
import { CandidateTechnologyModule } from "./candidateTechnology/candidateTechnology.module";
import { ChangelogModule } from "./changelog/changelog.module";
import { ContactModule } from "./contact/contact.module";
import { CountryModule } from "./country/country.module";
import { CurrencyModule } from "./currency/currency.module";
import { CustomSmtpModule } from "./customSmtp/customSmtp.module";
import { DealModule } from "./deal/deal.module";
import { EmailResetModule } from "./emailReset/emailReset.module";
import { EmailSentModule } from "./emailSent/emailSent.module";
import { EmailTemplateModule } from "./emailTemplate/emailTemplate.module";
import { EmployeeModule } from "./employee/employee.module";
import { EmployeeAppointmentModule } from "./employeeAppointment/employeeAppointment.module";
import { EmployeeAwardModule } from "./employeeAward/employeeAward.module";
import { EmployeeJobPresetModule } from "./employeeJobPreset/employeeJobPreset.module";
import { EmployeeLevelModule } from "./employeeLevel/employeeLevel.module";
import { EmployeePhoneModule } from "./employeePhone/employeePhone.module";
import { EmployeeProposalTemplateModule } from "./employeeProposalTemplate/employeeProposalTemplate.module";
import { EmployeeRecurringExpenseModule } from "./employeeRecurringExpense/employeeRecurringExpense.module";
import { EmployeeSettingModule } from "./employeeSetting/employeeSetting.module";
import { EmployeeTasksTaskModule } from "./employeeTasksTask/employeeTasksTask.module";
import { EmployeeUpworkJobSearchCriterionModule } from "./employeeUpworkJobSearchCriterion/employeeUpworkJobSearchCriterion.module";
import { EquipmentModule } from "./equipment/equipment.module";
import { EquipmentSharesEmployeeModule } from "./equipmentSharesEmployee/equipmentSharesEmployee.module";
import { EquipmentSharesTeamModule } from "./equipmentSharesTeam/equipmentSharesTeam.module";
import { EquipmentSharingModule } from "./equipmentSharing/equipmentSharing.module";
import { EquipmentSharingPolicyModule } from "./equipmentSharingPolicy/equipmentSharingPolicy.module";
import { EstimateEmailModule } from "./estimateEmail/estimateEmail.module";
import { EventTypeModule } from "./eventType/eventType.module";
import { ExpenseModule } from "./expense/expense.module";
import { ExpenseCategoryModule } from "./expenseCategory/expenseCategory.module";
import { FeatureModule } from "./feature/feature.module";
import { FeatureOrganizationModule } from "./featureOrganization/featureOrganization.module";
import { GoalModule } from "./goal/goal.module";
import { GoalGeneralSettingModule } from "./goalGeneralSetting/goalGeneralSetting.module";
import { GoalKpiModule } from "./goalKpi/goalKpi.module";
import { GoalKpiTemplateModule } from "./goalKpiTemplate/goalKpiTemplate.module";
import { GoalTemplateModule } from "./goalTemplate/goalTemplate.module";
import { GoalTimeFrameModule } from "./goalTimeFrame/goalTimeFrame.module";
import { ImageAssetModule } from "./imageAsset/imageAsset.module";
import { ImportHistoryModule } from "./importHistory/importHistory.module";
import { ImportRecordModule } from "./importRecord/importRecord.module";
import { IncomeModule } from "./income/income.module";
import { IntegrationModule } from "./integration/integration.module";
import { IntegrationEntitySettingModule } from "./integrationEntitySetting/integrationEntitySetting.module";
import { IntegrationEntitySettingTiedModule } from "./integrationEntitySettingTied/integrationEntitySettingTied.module";
import { IntegrationIntegrationTypeModule } from "./integrationIntegrationType/integrationIntegrationType.module";
import { IntegrationMapModule } from "./integrationMap/integrationMap.module";
import { IntegrationSettingModule } from "./integrationSetting/integrationSetting.module";
import { IntegrationTenantModule } from "./integrationTenant/integrationTenant.module";
import { IntegrationTypeModule } from "./integrationType/integrationType.module";
import { InviteModule } from "./invite/invite.module";
import { InviteOrganizationContactModule } from "./inviteOrganizationContact/inviteOrganizationContact.module";
import { InviteOrganizationDepartmentModule } from "./inviteOrganizationDepartment/inviteOrganizationDepartment.module";
import { InviteOrganizationProjectModule } from "./inviteOrganizationProject/inviteOrganizationProject.module";
import { InviteOrganizationTeamModule } from "./inviteOrganizationTeam/inviteOrganizationTeam.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { InvoiceEstimateHistoryModule } from "./invoiceEstimateHistory/invoiceEstimateHistory.module";
import { InvoiceItemModule } from "./invoiceItem/invoiceItem.module";
import { IssueTypeModule } from "./issueType/issueType.module";
import { JobPresetModule } from "./jobPreset/jobPreset.module";
import { JobPresetUpworkJobSearchCriterionModule } from "./jobPresetUpworkJobSearchCriterion/jobPresetUpworkJobSearchCriterion.module";
import { JobSearchCategoryModule } from "./jobSearchCategory/jobSearchCategory.module";
import { JobSearchOccupationModule } from "./jobSearchOccupation/jobSearchOccupation.module";
import { KeyResultModule } from "./keyResult/keyResult.module";
import { KeyResultTemplateModule } from "./keyResultTemplate/keyResultTemplate.module";
import { KeyResultUpdateModule } from "./keyResultUpdate/keyResultUpdate.module";
import { KnowledgeBaseModule } from "./knowledgeBase/knowledgeBase.module";
import { KnowledgeBaseArticleModule } from "./knowledgeBaseArticle/knowledgeBaseArticle.module";
import { KnowledgeBaseAuthorModule } from "./knowledgeBaseAuthor/knowledgeBaseAuthor.module";
import { LanguageModule } from "./language/language.module";
import { MerchantModule } from "./merchant/merchant.module";
import { MigrationModule } from "./migration/migration.module";
import { OrganizationModule } from "./organization/organization.module";
import { OrganizationAwardModule } from "./organizationAward/organizationAward.module";
import { OrganizationContactModule } from "./organizationContact/organizationContact.module";
import { OrganizationContactEmployeeModule } from "./organizationContactEmployee/organizationContactEmployee.module";
import { OrganizationDepartmentModule } from "./organizationDepartment/organizationDepartment.module";
import { OrganizationDepartmentEmployeeModule } from "./organizationDepartmentEmployee/organizationDepartmentEmployee.module";
import { OrganizationDocumentModule } from "./organizationDocument/organizationDocument.module";
import { OrganizationEmploymentTypeModule } from "./organizationEmploymentType/organizationEmploymentType.module";
import { OrganizationEmploymentTypeEmployeeModule } from "./organizationEmploymentTypeEmployee/organizationEmploymentTypeEmployee.module";
import { OrganizationLanguageModule } from "./organizationLanguage/organizationLanguage.module";
import { OrganizationPositionModule } from "./organizationPosition/organizationPosition.module";
import { OrganizationProjectModule } from "./organizationProject/organizationProject.module";
import { OrganizationProjectEmployeeModule } from "./organizationProjectEmployee/organizationProjectEmployee.module";
import { OrganizationRecurringExpenseModule } from "./organizationRecurringExpense/organizationRecurringExpense.module";
import { OrganizationSprintModule } from "./organizationSprint/organizationSprint.module";
import { OrganizationTaskSettingModule } from "./organizationTaskSetting/organizationTaskSetting.module";
import { OrganizationTeamModule } from "./organizationTeam/organizationTeam.module";
import { OrganizationTeamEmployeeModule } from "./organizationTeamEmployee/organizationTeamEmployee.module";
import { OrganizationTeamJoinRequestModule } from "./organizationTeamJoinRequest/organizationTeamJoinRequest.module";
import { OrganizationTeamTasksTaskModule } from "./organizationTeamTasksTask/organizationTeamTasksTask.module";
import { OrganizationVendorModule } from "./organizationVendor/organizationVendor.module";
import { PasswordResetModule } from "./passwordReset/passwordReset.module";
import { PaymentModule } from "./payment/payment.module";
import { PipelineModule } from "./pipeline/pipeline.module";
import { PipelineStageModule } from "./pipelineStage/pipelineStage.module";
import { ProductModule } from "./product/product.module";
import { ProductCategoryModule } from "./productCategory/productCategory.module";
import { ProductCategoryTranslationModule } from "./productCategoryTranslation/productCategoryTranslation.module";
import { ProductGalleryItemModule } from "./productGalleryItem/productGalleryItem.module";
import { ProductOptionModule } from "./productOption/productOption.module";
import { ProductOptionGroupModule } from "./productOptionGroup/productOptionGroup.module";
import { ProductOptionGroupTranslationModule } from "./productOptionGroupTranslation/productOptionGroupTranslation.module";
import { ProductOptionTranslationModule } from "./productOptionTranslation/productOptionTranslation.module";
import { ProductTranslationModule } from "./productTranslation/productTranslation.module";
import { ProductTypeModule } from "./productType/productType.module";
import { ProductTypeTranslationModule } from "./productTypeTranslation/productTypeTranslation.module";
import { ProductVariantModule } from "./productVariant/productVariant.module";
import { ProductVariantOptionsProductOptionModule } from "./productVariantOptionsProductOption/productVariantOptionsProductOption.module";
import { ProductVariantPriceModule } from "./productVariantPrice/productVariantPrice.module";
import { ProductVariantSettingModule } from "./productVariantSetting/productVariantSetting.module";
import { ProposalModule } from "./proposal/proposal.module";
import { ReportModule } from "./report/report.module";
import { ReportCategoryModule } from "./reportCategory/reportCategory.module";
import { ReportOrganizationModule } from "./reportOrganization/reportOrganization.module";
import { RequestApprovalModule } from "./requestApproval/requestApproval.module";
import { RequestApprovalEmployeeModule } from "./requestApprovalEmployee/requestApprovalEmployee.module";
import { RequestApprovalTeamModule } from "./requestApprovalTeam/requestApprovalTeam.module";
import { RoleModule } from "./role/role.module";
import { RolePermissionModule } from "./rolePermission/rolePermission.module";
import { ScreenshotModule } from "./screenshot/screenshot.module";
import { SkillModule } from "./skill/skill.module";
import { SkillEmployeeModule } from "./skillEmployee/skillEmployee.module";
import { SkillOrganizationModule } from "./skillOrganization/skillOrganization.module";
import { TagModule } from "./tag/tag.module";
import { TagCandidateModule } from "./tagCandidate/tagCandidate.module";
import { TagEmployeeModule } from "./tagEmployee/tagEmployee.module";
import { TagEmployeeLevelModule } from "./tagEmployeeLevel/tagEmployeeLevel.module";
import { TagEquipmentModule } from "./tagEquipment/tagEquipment.module";
import { TagEventTypeModule } from "./tagEventType/tagEventType.module";
import { TagExpenseModule } from "./tagExpense/tagExpense.module";
import { TagIncomeModule } from "./tagIncome/tagIncome.module";
import { TagIntegrationModule } from "./tagIntegration/tagIntegration.module";
import { TagInvoiceModule } from "./tagInvoice/tagInvoice.module";
import { TagMerchantModule } from "./tagMerchant/tagMerchant.module";
import { TagOrganizationModule } from "./tagOrganization/tagOrganization.module";
import { TagOrganizationContactModule } from "./tagOrganizationContact/tagOrganizationContact.module";
import { TagOrganizationDepartmentModule } from "./tagOrganizationDepartment/tagOrganizationDepartment.module";
import { TagOrganizationEmploymentTypeModule } from "./tagOrganizationEmploymentType/tagOrganizationEmploymentType.module";
import { TagOrganizationExpenseCategoryModule } from "./tagOrganizationExpenseCategory/tagOrganizationExpenseCategory.module";
import { TagOrganizationPositionModule } from "./tagOrganizationPosition/tagOrganizationPosition.module";
import { TagOrganizationProjectModule } from "./tagOrganizationProject/tagOrganizationProject.module";
import { TagOrganizationTeamModule } from "./tagOrganizationTeam/tagOrganizationTeam.module";
import { TagOrganizationVendorModule } from "./tagOrganizationVendor/tagOrganizationVendor.module";
import { TagPaymentModule } from "./tagPayment/tagPayment.module";
import { TagProductModule } from "./tagProduct/tagProduct.module";
import { TagProposalModule } from "./tagProposal/tagProposal.module";
import { TagRequestApprovalModule } from "./tagRequestApproval/tagRequestApproval.module";
import { TagTaskModule } from "./tagTask/tagTask.module";
import { TagUserModule } from "./tagUser/tagUser.module";
import { TagWarehouseModule } from "./tagWarehouse/tagWarehouse.module";
import { TaskModule } from "./task/task.module";
import { TaskEmployeeModule } from "./taskEmployee/taskEmployee.module";
import { TaskLinkedIssueModule } from "./taskLinkedIssue/taskLinkedIssue.module";
import { TaskPriorityModule } from "./taskPriority/taskPriority.module";
import { TaskRelatedIssueTypeModule } from "./taskRelatedIssueType/taskRelatedIssueType.module";
import { TaskSizeModule } from "./taskSize/taskSize.module";
import { TaskStatusModule } from "./taskStatus/taskStatus.module";
import { TaskTeamModule } from "./taskTeam/taskTeam.module";
import { TaskVersionModule } from "./taskVersion/taskVersion.module";
import { TenantModule } from "./tenant/tenant.module";
import { TenantSettingModule } from "./tenantSetting/tenantSetting.module";
import { TimeLogModule } from "./timeLog/timeLog.module";
import { TimeOffPolicyModule } from "./timeOffPolicy/timeOffPolicy.module";
import { TimeOffPolicyEmployeeModule } from "./timeOffPolicyEmployee/timeOffPolicyEmployee.module";
import { TimeOffRequestModule } from "./timeOffRequest/timeOffRequest.module";
import { TimeOffRequestEmployeeModule } from "./timeOffRequestEmployee/timeOffRequestEmployee.module";
import { TimeSlotModule } from "./timeSlot/timeSlot.module";
import { TimeSlotMinuteModule } from "./timeSlotMinute/timeSlotMinute.module";
import { TimeSlotTimeLogModule } from "./timeSlotTimeLog/timeSlotTimeLog.module";
import { TimesheetModule } from "./timesheet/timesheet.module";
import { UserModule } from "./user/user.module";
import { UserOrganizationModule } from "./userOrganization/userOrganization.module";
import { WarehouseModule } from "./warehouse/warehouse.module";
import { WarehouseMerchantModule } from "./warehouseMerchant/warehouseMerchant.module";
import { WarehouseProductModule } from "./warehouseProduct/warehouseProduct.module";
import { WarehouseProductVariantModule } from "./warehouseProductVariant/warehouseProductVariant.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    AccountingTemplateModule,
    ActivityModule,
    AppointmentEmployeeModule,
    ApprovalPolicyModule,
    AvailabilitySlotModule,
    CandidateModule,
    CandidateCriterionRatingModule,
    CandidateDepartmentModule,
    CandidateDocumentModule,
    CandidateEducationModule,
    CandidateEmploymentTypeModule,
    CandidateExperienceModule,
    CandidateFeedbackModule,
    CandidateInterviewModule,
    CandidateInterviewerModule,
    CandidatePersonalQualityModule,
    CandidateSkillModule,
    CandidateSourceModule,
    CandidateTechnologyModule,
    ChangelogModule,
    ContactModule,
    CountryModule,
    CurrencyModule,
    CustomSmtpModule,
    DealModule,
    EmailResetModule,
    EmailSentModule,
    EmailTemplateModule,
    EmployeeModule,
    EmployeeAppointmentModule,
    EmployeeAwardModule,
    EmployeeJobPresetModule,
    EmployeeLevelModule,
    EmployeePhoneModule,
    EmployeeProposalTemplateModule,
    EmployeeRecurringExpenseModule,
    EmployeeSettingModule,
    EmployeeTasksTaskModule,
    EmployeeUpworkJobSearchCriterionModule,
    EquipmentModule,
    EquipmentSharesEmployeeModule,
    EquipmentSharesTeamModule,
    EquipmentSharingModule,
    EquipmentSharingPolicyModule,
    EstimateEmailModule,
    EventTypeModule,
    ExpenseModule,
    ExpenseCategoryModule,
    FeatureModule,
    FeatureOrganizationModule,
    GoalModule,
    GoalGeneralSettingModule,
    GoalKpiModule,
    GoalKpiTemplateModule,
    GoalTemplateModule,
    GoalTimeFrameModule,
    ImageAssetModule,
    ImportHistoryModule,
    ImportRecordModule,
    IncomeModule,
    IntegrationModule,
    IntegrationEntitySettingModule,
    IntegrationEntitySettingTiedModule,
    IntegrationIntegrationTypeModule,
    IntegrationMapModule,
    IntegrationSettingModule,
    IntegrationTenantModule,
    IntegrationTypeModule,
    InviteModule,
    InviteOrganizationContactModule,
    InviteOrganizationDepartmentModule,
    InviteOrganizationProjectModule,
    InviteOrganizationTeamModule,
    InvoiceModule,
    InvoiceEstimateHistoryModule,
    InvoiceItemModule,
    IssueTypeModule,
    JobPresetModule,
    JobPresetUpworkJobSearchCriterionModule,
    JobSearchCategoryModule,
    JobSearchOccupationModule,
    KeyResultModule,
    KeyResultTemplateModule,
    KeyResultUpdateModule,
    KnowledgeBaseModule,
    KnowledgeBaseArticleModule,
    KnowledgeBaseAuthorModule,
    LanguageModule,
    MerchantModule,
    MigrationModule,
    OrganizationModule,
    OrganizationAwardModule,
    OrganizationContactModule,
    OrganizationContactEmployeeModule,
    OrganizationDepartmentModule,
    OrganizationDepartmentEmployeeModule,
    OrganizationDocumentModule,
    OrganizationEmploymentTypeModule,
    OrganizationEmploymentTypeEmployeeModule,
    OrganizationLanguageModule,
    OrganizationPositionModule,
    OrganizationProjectModule,
    OrganizationProjectEmployeeModule,
    OrganizationRecurringExpenseModule,
    OrganizationSprintModule,
    OrganizationTaskSettingModule,
    OrganizationTeamModule,
    OrganizationTeamEmployeeModule,
    OrganizationTeamJoinRequestModule,
    OrganizationTeamTasksTaskModule,
    OrganizationVendorModule,
    PasswordResetModule,
    PaymentModule,
    PipelineModule,
    PipelineStageModule,
    ProductModule,
    ProductCategoryModule,
    ProductCategoryTranslationModule,
    ProductGalleryItemModule,
    ProductOptionModule,
    ProductOptionGroupModule,
    ProductOptionGroupTranslationModule,
    ProductOptionTranslationModule,
    ProductTranslationModule,
    ProductTypeModule,
    ProductTypeTranslationModule,
    ProductVariantModule,
    ProductVariantOptionsProductOptionModule,
    ProductVariantPriceModule,
    ProductVariantSettingModule,
    ProposalModule,
    ReportModule,
    ReportCategoryModule,
    ReportOrganizationModule,
    RequestApprovalModule,
    RequestApprovalEmployeeModule,
    RequestApprovalTeamModule,
    RoleModule,
    RolePermissionModule,
    ScreenshotModule,
    SkillModule,
    SkillEmployeeModule,
    SkillOrganizationModule,
    TagModule,
    TagCandidateModule,
    TagEmployeeModule,
    TagEmployeeLevelModule,
    TagEquipmentModule,
    TagEventTypeModule,
    TagExpenseModule,
    TagIncomeModule,
    TagIntegrationModule,
    TagInvoiceModule,
    TagMerchantModule,
    TagOrganizationModule,
    TagOrganizationContactModule,
    TagOrganizationDepartmentModule,
    TagOrganizationEmploymentTypeModule,
    TagOrganizationExpenseCategoryModule,
    TagOrganizationPositionModule,
    TagOrganizationProjectModule,
    TagOrganizationTeamModule,
    TagOrganizationVendorModule,
    TagPaymentModule,
    TagProductModule,
    TagProposalModule,
    TagRequestApprovalModule,
    TagTaskModule,
    TagUserModule,
    TagWarehouseModule,
    TaskModule,
    TaskEmployeeModule,
    TaskLinkedIssueModule,
    TaskPriorityModule,
    TaskRelatedIssueTypeModule,
    TaskSizeModule,
    TaskStatusModule,
    TaskTeamModule,
    TaskVersionModule,
    TenantModule,
    TenantSettingModule,
    TimeLogModule,
    TimeOffPolicyModule,
    TimeOffPolicyEmployeeModule,
    TimeOffRequestModule,
    TimeOffRequestEmployeeModule,
    TimeSlotModule,
    TimeSlotMinuteModule,
    TimeSlotTimeLogModule,
    TimesheetModule,
    UserModule,
    UserOrganizationModule,
    WarehouseModule,
    WarehouseMerchantModule,
    WarehouseProductModule,
    WarehouseProductVariantModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
