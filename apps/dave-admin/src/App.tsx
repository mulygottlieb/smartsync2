import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AccountingTemplateList } from "./accountingTemplate/AccountingTemplateList";
import { AccountingTemplateCreate } from "./accountingTemplate/AccountingTemplateCreate";
import { AccountingTemplateEdit } from "./accountingTemplate/AccountingTemplateEdit";
import { AccountingTemplateShow } from "./accountingTemplate/AccountingTemplateShow";
import { ActivityList } from "./activity/ActivityList";
import { ActivityCreate } from "./activity/ActivityCreate";
import { ActivityEdit } from "./activity/ActivityEdit";
import { ActivityShow } from "./activity/ActivityShow";
import { AppointmentEmployeeList } from "./appointmentEmployee/AppointmentEmployeeList";
import { AppointmentEmployeeCreate } from "./appointmentEmployee/AppointmentEmployeeCreate";
import { AppointmentEmployeeEdit } from "./appointmentEmployee/AppointmentEmployeeEdit";
import { AppointmentEmployeeShow } from "./appointmentEmployee/AppointmentEmployeeShow";
import { ApprovalPolicyList } from "./approvalPolicy/ApprovalPolicyList";
import { ApprovalPolicyCreate } from "./approvalPolicy/ApprovalPolicyCreate";
import { ApprovalPolicyEdit } from "./approvalPolicy/ApprovalPolicyEdit";
import { ApprovalPolicyShow } from "./approvalPolicy/ApprovalPolicyShow";
import { AvailabilitySlotList } from "./availabilitySlot/AvailabilitySlotList";
import { AvailabilitySlotCreate } from "./availabilitySlot/AvailabilitySlotCreate";
import { AvailabilitySlotEdit } from "./availabilitySlot/AvailabilitySlotEdit";
import { AvailabilitySlotShow } from "./availabilitySlot/AvailabilitySlotShow";
import { CandidateList } from "./candidate/CandidateList";
import { CandidateCreate } from "./candidate/CandidateCreate";
import { CandidateEdit } from "./candidate/CandidateEdit";
import { CandidateShow } from "./candidate/CandidateShow";
import { CandidateCriterionRatingList } from "./candidateCriterionRating/CandidateCriterionRatingList";
import { CandidateCriterionRatingCreate } from "./candidateCriterionRating/CandidateCriterionRatingCreate";
import { CandidateCriterionRatingEdit } from "./candidateCriterionRating/CandidateCriterionRatingEdit";
import { CandidateCriterionRatingShow } from "./candidateCriterionRating/CandidateCriterionRatingShow";
import { CandidateDepartmentList } from "./candidateDepartment/CandidateDepartmentList";
import { CandidateDepartmentCreate } from "./candidateDepartment/CandidateDepartmentCreate";
import { CandidateDepartmentEdit } from "./candidateDepartment/CandidateDepartmentEdit";
import { CandidateDepartmentShow } from "./candidateDepartment/CandidateDepartmentShow";
import { CandidateDocumentList } from "./candidateDocument/CandidateDocumentList";
import { CandidateDocumentCreate } from "./candidateDocument/CandidateDocumentCreate";
import { CandidateDocumentEdit } from "./candidateDocument/CandidateDocumentEdit";
import { CandidateDocumentShow } from "./candidateDocument/CandidateDocumentShow";
import { CandidateEducationList } from "./candidateEducation/CandidateEducationList";
import { CandidateEducationCreate } from "./candidateEducation/CandidateEducationCreate";
import { CandidateEducationEdit } from "./candidateEducation/CandidateEducationEdit";
import { CandidateEducationShow } from "./candidateEducation/CandidateEducationShow";
import { CandidateEmploymentTypeList } from "./candidateEmploymentType/CandidateEmploymentTypeList";
import { CandidateEmploymentTypeCreate } from "./candidateEmploymentType/CandidateEmploymentTypeCreate";
import { CandidateEmploymentTypeEdit } from "./candidateEmploymentType/CandidateEmploymentTypeEdit";
import { CandidateEmploymentTypeShow } from "./candidateEmploymentType/CandidateEmploymentTypeShow";
import { CandidateExperienceList } from "./candidateExperience/CandidateExperienceList";
import { CandidateExperienceCreate } from "./candidateExperience/CandidateExperienceCreate";
import { CandidateExperienceEdit } from "./candidateExperience/CandidateExperienceEdit";
import { CandidateExperienceShow } from "./candidateExperience/CandidateExperienceShow";
import { CandidateFeedbackList } from "./candidateFeedback/CandidateFeedbackList";
import { CandidateFeedbackCreate } from "./candidateFeedback/CandidateFeedbackCreate";
import { CandidateFeedbackEdit } from "./candidateFeedback/CandidateFeedbackEdit";
import { CandidateFeedbackShow } from "./candidateFeedback/CandidateFeedbackShow";
import { CandidateInterviewList } from "./candidateInterview/CandidateInterviewList";
import { CandidateInterviewCreate } from "./candidateInterview/CandidateInterviewCreate";
import { CandidateInterviewEdit } from "./candidateInterview/CandidateInterviewEdit";
import { CandidateInterviewShow } from "./candidateInterview/CandidateInterviewShow";
import { CandidateInterviewerList } from "./candidateInterviewer/CandidateInterviewerList";
import { CandidateInterviewerCreate } from "./candidateInterviewer/CandidateInterviewerCreate";
import { CandidateInterviewerEdit } from "./candidateInterviewer/CandidateInterviewerEdit";
import { CandidateInterviewerShow } from "./candidateInterviewer/CandidateInterviewerShow";
import { CandidatePersonalQualityList } from "./candidatePersonalQuality/CandidatePersonalQualityList";
import { CandidatePersonalQualityCreate } from "./candidatePersonalQuality/CandidatePersonalQualityCreate";
import { CandidatePersonalQualityEdit } from "./candidatePersonalQuality/CandidatePersonalQualityEdit";
import { CandidatePersonalQualityShow } from "./candidatePersonalQuality/CandidatePersonalQualityShow";
import { CandidateSkillList } from "./candidateSkill/CandidateSkillList";
import { CandidateSkillCreate } from "./candidateSkill/CandidateSkillCreate";
import { CandidateSkillEdit } from "./candidateSkill/CandidateSkillEdit";
import { CandidateSkillShow } from "./candidateSkill/CandidateSkillShow";
import { CandidateSourceList } from "./candidateSource/CandidateSourceList";
import { CandidateSourceCreate } from "./candidateSource/CandidateSourceCreate";
import { CandidateSourceEdit } from "./candidateSource/CandidateSourceEdit";
import { CandidateSourceShow } from "./candidateSource/CandidateSourceShow";
import { CandidateTechnologyList } from "./candidateTechnology/CandidateTechnologyList";
import { CandidateTechnologyCreate } from "./candidateTechnology/CandidateTechnologyCreate";
import { CandidateTechnologyEdit } from "./candidateTechnology/CandidateTechnologyEdit";
import { CandidateTechnologyShow } from "./candidateTechnology/CandidateTechnologyShow";
import { ChangelogList } from "./changelog/ChangelogList";
import { ChangelogCreate } from "./changelog/ChangelogCreate";
import { ChangelogEdit } from "./changelog/ChangelogEdit";
import { ChangelogShow } from "./changelog/ChangelogShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { CountryList } from "./country/CountryList";
import { CountryCreate } from "./country/CountryCreate";
import { CountryEdit } from "./country/CountryEdit";
import { CountryShow } from "./country/CountryShow";
import { CurrencyList } from "./currency/CurrencyList";
import { CurrencyCreate } from "./currency/CurrencyCreate";
import { CurrencyEdit } from "./currency/CurrencyEdit";
import { CurrencyShow } from "./currency/CurrencyShow";
import { CustomSmtpList } from "./customSmtp/CustomSmtpList";
import { CustomSmtpCreate } from "./customSmtp/CustomSmtpCreate";
import { CustomSmtpEdit } from "./customSmtp/CustomSmtpEdit";
import { CustomSmtpShow } from "./customSmtp/CustomSmtpShow";
import { DealList } from "./deal/DealList";
import { DealCreate } from "./deal/DealCreate";
import { DealEdit } from "./deal/DealEdit";
import { DealShow } from "./deal/DealShow";
import { EmailResetList } from "./emailReset/EmailResetList";
import { EmailResetCreate } from "./emailReset/EmailResetCreate";
import { EmailResetEdit } from "./emailReset/EmailResetEdit";
import { EmailResetShow } from "./emailReset/EmailResetShow";
import { EmailSentList } from "./emailSent/EmailSentList";
import { EmailSentCreate } from "./emailSent/EmailSentCreate";
import { EmailSentEdit } from "./emailSent/EmailSentEdit";
import { EmailSentShow } from "./emailSent/EmailSentShow";
import { EmailTemplateList } from "./emailTemplate/EmailTemplateList";
import { EmailTemplateCreate } from "./emailTemplate/EmailTemplateCreate";
import { EmailTemplateEdit } from "./emailTemplate/EmailTemplateEdit";
import { EmailTemplateShow } from "./emailTemplate/EmailTemplateShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { EmployeeAppointmentList } from "./employeeAppointment/EmployeeAppointmentList";
import { EmployeeAppointmentCreate } from "./employeeAppointment/EmployeeAppointmentCreate";
import { EmployeeAppointmentEdit } from "./employeeAppointment/EmployeeAppointmentEdit";
import { EmployeeAppointmentShow } from "./employeeAppointment/EmployeeAppointmentShow";
import { EmployeeAwardList } from "./employeeAward/EmployeeAwardList";
import { EmployeeAwardCreate } from "./employeeAward/EmployeeAwardCreate";
import { EmployeeAwardEdit } from "./employeeAward/EmployeeAwardEdit";
import { EmployeeAwardShow } from "./employeeAward/EmployeeAwardShow";
import { EmployeeJobPresetList } from "./employeeJobPreset/EmployeeJobPresetList";
import { EmployeeJobPresetCreate } from "./employeeJobPreset/EmployeeJobPresetCreate";
import { EmployeeJobPresetEdit } from "./employeeJobPreset/EmployeeJobPresetEdit";
import { EmployeeJobPresetShow } from "./employeeJobPreset/EmployeeJobPresetShow";
import { EmployeeLevelList } from "./employeeLevel/EmployeeLevelList";
import { EmployeeLevelCreate } from "./employeeLevel/EmployeeLevelCreate";
import { EmployeeLevelEdit } from "./employeeLevel/EmployeeLevelEdit";
import { EmployeeLevelShow } from "./employeeLevel/EmployeeLevelShow";
import { EmployeePhoneList } from "./employeePhone/EmployeePhoneList";
import { EmployeePhoneCreate } from "./employeePhone/EmployeePhoneCreate";
import { EmployeePhoneEdit } from "./employeePhone/EmployeePhoneEdit";
import { EmployeePhoneShow } from "./employeePhone/EmployeePhoneShow";
import { EmployeeProposalTemplateList } from "./employeeProposalTemplate/EmployeeProposalTemplateList";
import { EmployeeProposalTemplateCreate } from "./employeeProposalTemplate/EmployeeProposalTemplateCreate";
import { EmployeeProposalTemplateEdit } from "./employeeProposalTemplate/EmployeeProposalTemplateEdit";
import { EmployeeProposalTemplateShow } from "./employeeProposalTemplate/EmployeeProposalTemplateShow";
import { EmployeeRecurringExpenseList } from "./employeeRecurringExpense/EmployeeRecurringExpenseList";
import { EmployeeRecurringExpenseCreate } from "./employeeRecurringExpense/EmployeeRecurringExpenseCreate";
import { EmployeeRecurringExpenseEdit } from "./employeeRecurringExpense/EmployeeRecurringExpenseEdit";
import { EmployeeRecurringExpenseShow } from "./employeeRecurringExpense/EmployeeRecurringExpenseShow";
import { EmployeeSettingList } from "./employeeSetting/EmployeeSettingList";
import { EmployeeSettingCreate } from "./employeeSetting/EmployeeSettingCreate";
import { EmployeeSettingEdit } from "./employeeSetting/EmployeeSettingEdit";
import { EmployeeSettingShow } from "./employeeSetting/EmployeeSettingShow";
import { EmployeeTasksTaskList } from "./employeeTasksTask/EmployeeTasksTaskList";
import { EmployeeTasksTaskCreate } from "./employeeTasksTask/EmployeeTasksTaskCreate";
import { EmployeeTasksTaskEdit } from "./employeeTasksTask/EmployeeTasksTaskEdit";
import { EmployeeTasksTaskShow } from "./employeeTasksTask/EmployeeTasksTaskShow";
import { EmployeeUpworkJobSearchCriterionList } from "./employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionList";
import { EmployeeUpworkJobSearchCriterionCreate } from "./employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionCreate";
import { EmployeeUpworkJobSearchCriterionEdit } from "./employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionEdit";
import { EmployeeUpworkJobSearchCriterionShow } from "./employeeUpworkJobSearchCriterion/EmployeeUpworkJobSearchCriterionShow";
import { EquipmentList } from "./equipment/EquipmentList";
import { EquipmentCreate } from "./equipment/EquipmentCreate";
import { EquipmentEdit } from "./equipment/EquipmentEdit";
import { EquipmentShow } from "./equipment/EquipmentShow";
import { EquipmentSharesEmployeeList } from "./equipmentSharesEmployee/EquipmentSharesEmployeeList";
import { EquipmentSharesEmployeeCreate } from "./equipmentSharesEmployee/EquipmentSharesEmployeeCreate";
import { EquipmentSharesEmployeeEdit } from "./equipmentSharesEmployee/EquipmentSharesEmployeeEdit";
import { EquipmentSharesEmployeeShow } from "./equipmentSharesEmployee/EquipmentSharesEmployeeShow";
import { EquipmentSharesTeamList } from "./equipmentSharesTeam/EquipmentSharesTeamList";
import { EquipmentSharesTeamCreate } from "./equipmentSharesTeam/EquipmentSharesTeamCreate";
import { EquipmentSharesTeamEdit } from "./equipmentSharesTeam/EquipmentSharesTeamEdit";
import { EquipmentSharesTeamShow } from "./equipmentSharesTeam/EquipmentSharesTeamShow";
import { EquipmentSharingList } from "./equipmentSharing/EquipmentSharingList";
import { EquipmentSharingCreate } from "./equipmentSharing/EquipmentSharingCreate";
import { EquipmentSharingEdit } from "./equipmentSharing/EquipmentSharingEdit";
import { EquipmentSharingShow } from "./equipmentSharing/EquipmentSharingShow";
import { EquipmentSharingPolicyList } from "./equipmentSharingPolicy/EquipmentSharingPolicyList";
import { EquipmentSharingPolicyCreate } from "./equipmentSharingPolicy/EquipmentSharingPolicyCreate";
import { EquipmentSharingPolicyEdit } from "./equipmentSharingPolicy/EquipmentSharingPolicyEdit";
import { EquipmentSharingPolicyShow } from "./equipmentSharingPolicy/EquipmentSharingPolicyShow";
import { EstimateEmailList } from "./estimateEmail/EstimateEmailList";
import { EstimateEmailCreate } from "./estimateEmail/EstimateEmailCreate";
import { EstimateEmailEdit } from "./estimateEmail/EstimateEmailEdit";
import { EstimateEmailShow } from "./estimateEmail/EstimateEmailShow";
import { EventTypeList } from "./eventType/EventTypeList";
import { EventTypeCreate } from "./eventType/EventTypeCreate";
import { EventTypeEdit } from "./eventType/EventTypeEdit";
import { EventTypeShow } from "./eventType/EventTypeShow";
import { ExpenseList } from "./expense/ExpenseList";
import { ExpenseCreate } from "./expense/ExpenseCreate";
import { ExpenseEdit } from "./expense/ExpenseEdit";
import { ExpenseShow } from "./expense/ExpenseShow";
import { ExpenseCategoryList } from "./expenseCategory/ExpenseCategoryList";
import { ExpenseCategoryCreate } from "./expenseCategory/ExpenseCategoryCreate";
import { ExpenseCategoryEdit } from "./expenseCategory/ExpenseCategoryEdit";
import { ExpenseCategoryShow } from "./expenseCategory/ExpenseCategoryShow";
import { FeatureList } from "./feature/FeatureList";
import { FeatureCreate } from "./feature/FeatureCreate";
import { FeatureEdit } from "./feature/FeatureEdit";
import { FeatureShow } from "./feature/FeatureShow";
import { FeatureOrganizationList } from "./featureOrganization/FeatureOrganizationList";
import { FeatureOrganizationCreate } from "./featureOrganization/FeatureOrganizationCreate";
import { FeatureOrganizationEdit } from "./featureOrganization/FeatureOrganizationEdit";
import { FeatureOrganizationShow } from "./featureOrganization/FeatureOrganizationShow";
import { GoalList } from "./goal/GoalList";
import { GoalCreate } from "./goal/GoalCreate";
import { GoalEdit } from "./goal/GoalEdit";
import { GoalShow } from "./goal/GoalShow";
import { GoalGeneralSettingList } from "./goalGeneralSetting/GoalGeneralSettingList";
import { GoalGeneralSettingCreate } from "./goalGeneralSetting/GoalGeneralSettingCreate";
import { GoalGeneralSettingEdit } from "./goalGeneralSetting/GoalGeneralSettingEdit";
import { GoalGeneralSettingShow } from "./goalGeneralSetting/GoalGeneralSettingShow";
import { GoalKpiList } from "./goalKpi/GoalKpiList";
import { GoalKpiCreate } from "./goalKpi/GoalKpiCreate";
import { GoalKpiEdit } from "./goalKpi/GoalKpiEdit";
import { GoalKpiShow } from "./goalKpi/GoalKpiShow";
import { GoalKpiTemplateList } from "./goalKpiTemplate/GoalKpiTemplateList";
import { GoalKpiTemplateCreate } from "./goalKpiTemplate/GoalKpiTemplateCreate";
import { GoalKpiTemplateEdit } from "./goalKpiTemplate/GoalKpiTemplateEdit";
import { GoalKpiTemplateShow } from "./goalKpiTemplate/GoalKpiTemplateShow";
import { GoalTemplateList } from "./goalTemplate/GoalTemplateList";
import { GoalTemplateCreate } from "./goalTemplate/GoalTemplateCreate";
import { GoalTemplateEdit } from "./goalTemplate/GoalTemplateEdit";
import { GoalTemplateShow } from "./goalTemplate/GoalTemplateShow";
import { GoalTimeFrameList } from "./goalTimeFrame/GoalTimeFrameList";
import { GoalTimeFrameCreate } from "./goalTimeFrame/GoalTimeFrameCreate";
import { GoalTimeFrameEdit } from "./goalTimeFrame/GoalTimeFrameEdit";
import { GoalTimeFrameShow } from "./goalTimeFrame/GoalTimeFrameShow";
import { ImageAssetList } from "./imageAsset/ImageAssetList";
import { ImageAssetCreate } from "./imageAsset/ImageAssetCreate";
import { ImageAssetEdit } from "./imageAsset/ImageAssetEdit";
import { ImageAssetShow } from "./imageAsset/ImageAssetShow";
import { ImportHistoryList } from "./importHistory/ImportHistoryList";
import { ImportHistoryCreate } from "./importHistory/ImportHistoryCreate";
import { ImportHistoryEdit } from "./importHistory/ImportHistoryEdit";
import { ImportHistoryShow } from "./importHistory/ImportHistoryShow";
import { ImportRecordList } from "./importRecord/ImportRecordList";
import { ImportRecordCreate } from "./importRecord/ImportRecordCreate";
import { ImportRecordEdit } from "./importRecord/ImportRecordEdit";
import { ImportRecordShow } from "./importRecord/ImportRecordShow";
import { IncomeList } from "./income/IncomeList";
import { IncomeCreate } from "./income/IncomeCreate";
import { IncomeEdit } from "./income/IncomeEdit";
import { IncomeShow } from "./income/IncomeShow";
import { IntegrationList } from "./integration/IntegrationList";
import { IntegrationCreate } from "./integration/IntegrationCreate";
import { IntegrationEdit } from "./integration/IntegrationEdit";
import { IntegrationShow } from "./integration/IntegrationShow";
import { IntegrationEntitySettingList } from "./integrationEntitySetting/IntegrationEntitySettingList";
import { IntegrationEntitySettingCreate } from "./integrationEntitySetting/IntegrationEntitySettingCreate";
import { IntegrationEntitySettingEdit } from "./integrationEntitySetting/IntegrationEntitySettingEdit";
import { IntegrationEntitySettingShow } from "./integrationEntitySetting/IntegrationEntitySettingShow";
import { IntegrationEntitySettingTiedList } from "./integrationEntitySettingTied/IntegrationEntitySettingTiedList";
import { IntegrationEntitySettingTiedCreate } from "./integrationEntitySettingTied/IntegrationEntitySettingTiedCreate";
import { IntegrationEntitySettingTiedEdit } from "./integrationEntitySettingTied/IntegrationEntitySettingTiedEdit";
import { IntegrationEntitySettingTiedShow } from "./integrationEntitySettingTied/IntegrationEntitySettingTiedShow";
import { IntegrationIntegrationTypeList } from "./integrationIntegrationType/IntegrationIntegrationTypeList";
import { IntegrationIntegrationTypeCreate } from "./integrationIntegrationType/IntegrationIntegrationTypeCreate";
import { IntegrationIntegrationTypeEdit } from "./integrationIntegrationType/IntegrationIntegrationTypeEdit";
import { IntegrationIntegrationTypeShow } from "./integrationIntegrationType/IntegrationIntegrationTypeShow";
import { IntegrationMapList } from "./integrationMap/IntegrationMapList";
import { IntegrationMapCreate } from "./integrationMap/IntegrationMapCreate";
import { IntegrationMapEdit } from "./integrationMap/IntegrationMapEdit";
import { IntegrationMapShow } from "./integrationMap/IntegrationMapShow";
import { IntegrationSettingList } from "./integrationSetting/IntegrationSettingList";
import { IntegrationSettingCreate } from "./integrationSetting/IntegrationSettingCreate";
import { IntegrationSettingEdit } from "./integrationSetting/IntegrationSettingEdit";
import { IntegrationSettingShow } from "./integrationSetting/IntegrationSettingShow";
import { IntegrationTenantList } from "./integrationTenant/IntegrationTenantList";
import { IntegrationTenantCreate } from "./integrationTenant/IntegrationTenantCreate";
import { IntegrationTenantEdit } from "./integrationTenant/IntegrationTenantEdit";
import { IntegrationTenantShow } from "./integrationTenant/IntegrationTenantShow";
import { IntegrationTypeList } from "./integrationType/IntegrationTypeList";
import { IntegrationTypeCreate } from "./integrationType/IntegrationTypeCreate";
import { IntegrationTypeEdit } from "./integrationType/IntegrationTypeEdit";
import { IntegrationTypeShow } from "./integrationType/IntegrationTypeShow";
import { InviteList } from "./invite/InviteList";
import { InviteCreate } from "./invite/InviteCreate";
import { InviteEdit } from "./invite/InviteEdit";
import { InviteShow } from "./invite/InviteShow";
import { InviteOrganizationContactList } from "./inviteOrganizationContact/InviteOrganizationContactList";
import { InviteOrganizationContactCreate } from "./inviteOrganizationContact/InviteOrganizationContactCreate";
import { InviteOrganizationContactEdit } from "./inviteOrganizationContact/InviteOrganizationContactEdit";
import { InviteOrganizationContactShow } from "./inviteOrganizationContact/InviteOrganizationContactShow";
import { InviteOrganizationDepartmentList } from "./inviteOrganizationDepartment/InviteOrganizationDepartmentList";
import { InviteOrganizationDepartmentCreate } from "./inviteOrganizationDepartment/InviteOrganizationDepartmentCreate";
import { InviteOrganizationDepartmentEdit } from "./inviteOrganizationDepartment/InviteOrganizationDepartmentEdit";
import { InviteOrganizationDepartmentShow } from "./inviteOrganizationDepartment/InviteOrganizationDepartmentShow";
import { InviteOrganizationProjectList } from "./inviteOrganizationProject/InviteOrganizationProjectList";
import { InviteOrganizationProjectCreate } from "./inviteOrganizationProject/InviteOrganizationProjectCreate";
import { InviteOrganizationProjectEdit } from "./inviteOrganizationProject/InviteOrganizationProjectEdit";
import { InviteOrganizationProjectShow } from "./inviteOrganizationProject/InviteOrganizationProjectShow";
import { InviteOrganizationTeamList } from "./inviteOrganizationTeam/InviteOrganizationTeamList";
import { InviteOrganizationTeamCreate } from "./inviteOrganizationTeam/InviteOrganizationTeamCreate";
import { InviteOrganizationTeamEdit } from "./inviteOrganizationTeam/InviteOrganizationTeamEdit";
import { InviteOrganizationTeamShow } from "./inviteOrganizationTeam/InviteOrganizationTeamShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { InvoiceEstimateHistoryList } from "./invoiceEstimateHistory/InvoiceEstimateHistoryList";
import { InvoiceEstimateHistoryCreate } from "./invoiceEstimateHistory/InvoiceEstimateHistoryCreate";
import { InvoiceEstimateHistoryEdit } from "./invoiceEstimateHistory/InvoiceEstimateHistoryEdit";
import { InvoiceEstimateHistoryShow } from "./invoiceEstimateHistory/InvoiceEstimateHistoryShow";
import { InvoiceItemList } from "./invoiceItem/InvoiceItemList";
import { InvoiceItemCreate } from "./invoiceItem/InvoiceItemCreate";
import { InvoiceItemEdit } from "./invoiceItem/InvoiceItemEdit";
import { InvoiceItemShow } from "./invoiceItem/InvoiceItemShow";
import { IssueTypeList } from "./issueType/IssueTypeList";
import { IssueTypeCreate } from "./issueType/IssueTypeCreate";
import { IssueTypeEdit } from "./issueType/IssueTypeEdit";
import { IssueTypeShow } from "./issueType/IssueTypeShow";
import { JobPresetList } from "./jobPreset/JobPresetList";
import { JobPresetCreate } from "./jobPreset/JobPresetCreate";
import { JobPresetEdit } from "./jobPreset/JobPresetEdit";
import { JobPresetShow } from "./jobPreset/JobPresetShow";
import { JobPresetUpworkJobSearchCriterionList } from "./jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionList";
import { JobPresetUpworkJobSearchCriterionCreate } from "./jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionCreate";
import { JobPresetUpworkJobSearchCriterionEdit } from "./jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionEdit";
import { JobPresetUpworkJobSearchCriterionShow } from "./jobPresetUpworkJobSearchCriterion/JobPresetUpworkJobSearchCriterionShow";
import { JobSearchCategoryList } from "./jobSearchCategory/JobSearchCategoryList";
import { JobSearchCategoryCreate } from "./jobSearchCategory/JobSearchCategoryCreate";
import { JobSearchCategoryEdit } from "./jobSearchCategory/JobSearchCategoryEdit";
import { JobSearchCategoryShow } from "./jobSearchCategory/JobSearchCategoryShow";
import { JobSearchOccupationList } from "./jobSearchOccupation/JobSearchOccupationList";
import { JobSearchOccupationCreate } from "./jobSearchOccupation/JobSearchOccupationCreate";
import { JobSearchOccupationEdit } from "./jobSearchOccupation/JobSearchOccupationEdit";
import { JobSearchOccupationShow } from "./jobSearchOccupation/JobSearchOccupationShow";
import { KeyResultList } from "./keyResult/KeyResultList";
import { KeyResultCreate } from "./keyResult/KeyResultCreate";
import { KeyResultEdit } from "./keyResult/KeyResultEdit";
import { KeyResultShow } from "./keyResult/KeyResultShow";
import { KeyResultTemplateList } from "./keyResultTemplate/KeyResultTemplateList";
import { KeyResultTemplateCreate } from "./keyResultTemplate/KeyResultTemplateCreate";
import { KeyResultTemplateEdit } from "./keyResultTemplate/KeyResultTemplateEdit";
import { KeyResultTemplateShow } from "./keyResultTemplate/KeyResultTemplateShow";
import { KeyResultUpdateList } from "./keyResultUpdate/KeyResultUpdateList";
import { KeyResultUpdateCreate } from "./keyResultUpdate/KeyResultUpdateCreate";
import { KeyResultUpdateEdit } from "./keyResultUpdate/KeyResultUpdateEdit";
import { KeyResultUpdateShow } from "./keyResultUpdate/KeyResultUpdateShow";
import { KnowledgeBaseList } from "./knowledgeBase/KnowledgeBaseList";
import { KnowledgeBaseCreate } from "./knowledgeBase/KnowledgeBaseCreate";
import { KnowledgeBaseEdit } from "./knowledgeBase/KnowledgeBaseEdit";
import { KnowledgeBaseShow } from "./knowledgeBase/KnowledgeBaseShow";
import { KnowledgeBaseArticleList } from "./knowledgeBaseArticle/KnowledgeBaseArticleList";
import { KnowledgeBaseArticleCreate } from "./knowledgeBaseArticle/KnowledgeBaseArticleCreate";
import { KnowledgeBaseArticleEdit } from "./knowledgeBaseArticle/KnowledgeBaseArticleEdit";
import { KnowledgeBaseArticleShow } from "./knowledgeBaseArticle/KnowledgeBaseArticleShow";
import { KnowledgeBaseAuthorList } from "./knowledgeBaseAuthor/KnowledgeBaseAuthorList";
import { KnowledgeBaseAuthorCreate } from "./knowledgeBaseAuthor/KnowledgeBaseAuthorCreate";
import { KnowledgeBaseAuthorEdit } from "./knowledgeBaseAuthor/KnowledgeBaseAuthorEdit";
import { KnowledgeBaseAuthorShow } from "./knowledgeBaseAuthor/KnowledgeBaseAuthorShow";
import { LanguageList } from "./language/LanguageList";
import { LanguageCreate } from "./language/LanguageCreate";
import { LanguageEdit } from "./language/LanguageEdit";
import { LanguageShow } from "./language/LanguageShow";
import { MerchantList } from "./merchant/MerchantList";
import { MerchantCreate } from "./merchant/MerchantCreate";
import { MerchantEdit } from "./merchant/MerchantEdit";
import { MerchantShow } from "./merchant/MerchantShow";
import { MigrationList } from "./migration/MigrationList";
import { MigrationCreate } from "./migration/MigrationCreate";
import { MigrationEdit } from "./migration/MigrationEdit";
import { MigrationShow } from "./migration/MigrationShow";
import { OrganizationList } from "./organization/OrganizationList";
import { OrganizationCreate } from "./organization/OrganizationCreate";
import { OrganizationEdit } from "./organization/OrganizationEdit";
import { OrganizationShow } from "./organization/OrganizationShow";
import { OrganizationAwardList } from "./organizationAward/OrganizationAwardList";
import { OrganizationAwardCreate } from "./organizationAward/OrganizationAwardCreate";
import { OrganizationAwardEdit } from "./organizationAward/OrganizationAwardEdit";
import { OrganizationAwardShow } from "./organizationAward/OrganizationAwardShow";
import { OrganizationContactList } from "./organizationContact/OrganizationContactList";
import { OrganizationContactCreate } from "./organizationContact/OrganizationContactCreate";
import { OrganizationContactEdit } from "./organizationContact/OrganizationContactEdit";
import { OrganizationContactShow } from "./organizationContact/OrganizationContactShow";
import { OrganizationContactEmployeeList } from "./organizationContactEmployee/OrganizationContactEmployeeList";
import { OrganizationContactEmployeeCreate } from "./organizationContactEmployee/OrganizationContactEmployeeCreate";
import { OrganizationContactEmployeeEdit } from "./organizationContactEmployee/OrganizationContactEmployeeEdit";
import { OrganizationContactEmployeeShow } from "./organizationContactEmployee/OrganizationContactEmployeeShow";
import { OrganizationDepartmentList } from "./organizationDepartment/OrganizationDepartmentList";
import { OrganizationDepartmentCreate } from "./organizationDepartment/OrganizationDepartmentCreate";
import { OrganizationDepartmentEdit } from "./organizationDepartment/OrganizationDepartmentEdit";
import { OrganizationDepartmentShow } from "./organizationDepartment/OrganizationDepartmentShow";
import { OrganizationDepartmentEmployeeList } from "./organizationDepartmentEmployee/OrganizationDepartmentEmployeeList";
import { OrganizationDepartmentEmployeeCreate } from "./organizationDepartmentEmployee/OrganizationDepartmentEmployeeCreate";
import { OrganizationDepartmentEmployeeEdit } from "./organizationDepartmentEmployee/OrganizationDepartmentEmployeeEdit";
import { OrganizationDepartmentEmployeeShow } from "./organizationDepartmentEmployee/OrganizationDepartmentEmployeeShow";
import { OrganizationDocumentList } from "./organizationDocument/OrganizationDocumentList";
import { OrganizationDocumentCreate } from "./organizationDocument/OrganizationDocumentCreate";
import { OrganizationDocumentEdit } from "./organizationDocument/OrganizationDocumentEdit";
import { OrganizationDocumentShow } from "./organizationDocument/OrganizationDocumentShow";
import { OrganizationEmploymentTypeList } from "./organizationEmploymentType/OrganizationEmploymentTypeList";
import { OrganizationEmploymentTypeCreate } from "./organizationEmploymentType/OrganizationEmploymentTypeCreate";
import { OrganizationEmploymentTypeEdit } from "./organizationEmploymentType/OrganizationEmploymentTypeEdit";
import { OrganizationEmploymentTypeShow } from "./organizationEmploymentType/OrganizationEmploymentTypeShow";
import { OrganizationEmploymentTypeEmployeeList } from "./organizationEmploymentTypeEmployee/OrganizationEmploymentTypeEmployeeList";
import { OrganizationEmploymentTypeEmployeeCreate } from "./organizationEmploymentTypeEmployee/OrganizationEmploymentTypeEmployeeCreate";
import { OrganizationEmploymentTypeEmployeeEdit } from "./organizationEmploymentTypeEmployee/OrganizationEmploymentTypeEmployeeEdit";
import { OrganizationEmploymentTypeEmployeeShow } from "./organizationEmploymentTypeEmployee/OrganizationEmploymentTypeEmployeeShow";
import { OrganizationLanguageList } from "./organizationLanguage/OrganizationLanguageList";
import { OrganizationLanguageCreate } from "./organizationLanguage/OrganizationLanguageCreate";
import { OrganizationLanguageEdit } from "./organizationLanguage/OrganizationLanguageEdit";
import { OrganizationLanguageShow } from "./organizationLanguage/OrganizationLanguageShow";
import { OrganizationPositionList } from "./organizationPosition/OrganizationPositionList";
import { OrganizationPositionCreate } from "./organizationPosition/OrganizationPositionCreate";
import { OrganizationPositionEdit } from "./organizationPosition/OrganizationPositionEdit";
import { OrganizationPositionShow } from "./organizationPosition/OrganizationPositionShow";
import { OrganizationProjectList } from "./organizationProject/OrganizationProjectList";
import { OrganizationProjectCreate } from "./organizationProject/OrganizationProjectCreate";
import { OrganizationProjectEdit } from "./organizationProject/OrganizationProjectEdit";
import { OrganizationProjectShow } from "./organizationProject/OrganizationProjectShow";
import { OrganizationProjectEmployeeList } from "./organizationProjectEmployee/OrganizationProjectEmployeeList";
import { OrganizationProjectEmployeeCreate } from "./organizationProjectEmployee/OrganizationProjectEmployeeCreate";
import { OrganizationProjectEmployeeEdit } from "./organizationProjectEmployee/OrganizationProjectEmployeeEdit";
import { OrganizationProjectEmployeeShow } from "./organizationProjectEmployee/OrganizationProjectEmployeeShow";
import { OrganizationRecurringExpenseList } from "./organizationRecurringExpense/OrganizationRecurringExpenseList";
import { OrganizationRecurringExpenseCreate } from "./organizationRecurringExpense/OrganizationRecurringExpenseCreate";
import { OrganizationRecurringExpenseEdit } from "./organizationRecurringExpense/OrganizationRecurringExpenseEdit";
import { OrganizationRecurringExpenseShow } from "./organizationRecurringExpense/OrganizationRecurringExpenseShow";
import { OrganizationSprintList } from "./organizationSprint/OrganizationSprintList";
import { OrganizationSprintCreate } from "./organizationSprint/OrganizationSprintCreate";
import { OrganizationSprintEdit } from "./organizationSprint/OrganizationSprintEdit";
import { OrganizationSprintShow } from "./organizationSprint/OrganizationSprintShow";
import { OrganizationTaskSettingList } from "./organizationTaskSetting/OrganizationTaskSettingList";
import { OrganizationTaskSettingCreate } from "./organizationTaskSetting/OrganizationTaskSettingCreate";
import { OrganizationTaskSettingEdit } from "./organizationTaskSetting/OrganizationTaskSettingEdit";
import { OrganizationTaskSettingShow } from "./organizationTaskSetting/OrganizationTaskSettingShow";
import { OrganizationTeamList } from "./organizationTeam/OrganizationTeamList";
import { OrganizationTeamCreate } from "./organizationTeam/OrganizationTeamCreate";
import { OrganizationTeamEdit } from "./organizationTeam/OrganizationTeamEdit";
import { OrganizationTeamShow } from "./organizationTeam/OrganizationTeamShow";
import { OrganizationTeamEmployeeList } from "./organizationTeamEmployee/OrganizationTeamEmployeeList";
import { OrganizationTeamEmployeeCreate } from "./organizationTeamEmployee/OrganizationTeamEmployeeCreate";
import { OrganizationTeamEmployeeEdit } from "./organizationTeamEmployee/OrganizationTeamEmployeeEdit";
import { OrganizationTeamEmployeeShow } from "./organizationTeamEmployee/OrganizationTeamEmployeeShow";
import { OrganizationTeamJoinRequestList } from "./organizationTeamJoinRequest/OrganizationTeamJoinRequestList";
import { OrganizationTeamJoinRequestCreate } from "./organizationTeamJoinRequest/OrganizationTeamJoinRequestCreate";
import { OrganizationTeamJoinRequestEdit } from "./organizationTeamJoinRequest/OrganizationTeamJoinRequestEdit";
import { OrganizationTeamJoinRequestShow } from "./organizationTeamJoinRequest/OrganizationTeamJoinRequestShow";
import { OrganizationTeamTasksTaskList } from "./organizationTeamTasksTask/OrganizationTeamTasksTaskList";
import { OrganizationTeamTasksTaskCreate } from "./organizationTeamTasksTask/OrganizationTeamTasksTaskCreate";
import { OrganizationTeamTasksTaskEdit } from "./organizationTeamTasksTask/OrganizationTeamTasksTaskEdit";
import { OrganizationTeamTasksTaskShow } from "./organizationTeamTasksTask/OrganizationTeamTasksTaskShow";
import { OrganizationVendorList } from "./organizationVendor/OrganizationVendorList";
import { OrganizationVendorCreate } from "./organizationVendor/OrganizationVendorCreate";
import { OrganizationVendorEdit } from "./organizationVendor/OrganizationVendorEdit";
import { OrganizationVendorShow } from "./organizationVendor/OrganizationVendorShow";
import { PasswordResetList } from "./passwordReset/PasswordResetList";
import { PasswordResetCreate } from "./passwordReset/PasswordResetCreate";
import { PasswordResetEdit } from "./passwordReset/PasswordResetEdit";
import { PasswordResetShow } from "./passwordReset/PasswordResetShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { PipelineList } from "./pipeline/PipelineList";
import { PipelineCreate } from "./pipeline/PipelineCreate";
import { PipelineEdit } from "./pipeline/PipelineEdit";
import { PipelineShow } from "./pipeline/PipelineShow";
import { PipelineStageList } from "./pipelineStage/PipelineStageList";
import { PipelineStageCreate } from "./pipelineStage/PipelineStageCreate";
import { PipelineStageEdit } from "./pipelineStage/PipelineStageEdit";
import { PipelineStageShow } from "./pipelineStage/PipelineStageShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ProductCategoryList } from "./productCategory/ProductCategoryList";
import { ProductCategoryCreate } from "./productCategory/ProductCategoryCreate";
import { ProductCategoryEdit } from "./productCategory/ProductCategoryEdit";
import { ProductCategoryShow } from "./productCategory/ProductCategoryShow";
import { ProductCategoryTranslationList } from "./productCategoryTranslation/ProductCategoryTranslationList";
import { ProductCategoryTranslationCreate } from "./productCategoryTranslation/ProductCategoryTranslationCreate";
import { ProductCategoryTranslationEdit } from "./productCategoryTranslation/ProductCategoryTranslationEdit";
import { ProductCategoryTranslationShow } from "./productCategoryTranslation/ProductCategoryTranslationShow";
import { ProductGalleryItemList } from "./productGalleryItem/ProductGalleryItemList";
import { ProductGalleryItemCreate } from "./productGalleryItem/ProductGalleryItemCreate";
import { ProductGalleryItemEdit } from "./productGalleryItem/ProductGalleryItemEdit";
import { ProductGalleryItemShow } from "./productGalleryItem/ProductGalleryItemShow";
import { ProductOptionList } from "./productOption/ProductOptionList";
import { ProductOptionCreate } from "./productOption/ProductOptionCreate";
import { ProductOptionEdit } from "./productOption/ProductOptionEdit";
import { ProductOptionShow } from "./productOption/ProductOptionShow";
import { ProductOptionGroupList } from "./productOptionGroup/ProductOptionGroupList";
import { ProductOptionGroupCreate } from "./productOptionGroup/ProductOptionGroupCreate";
import { ProductOptionGroupEdit } from "./productOptionGroup/ProductOptionGroupEdit";
import { ProductOptionGroupShow } from "./productOptionGroup/ProductOptionGroupShow";
import { ProductOptionGroupTranslationList } from "./productOptionGroupTranslation/ProductOptionGroupTranslationList";
import { ProductOptionGroupTranslationCreate } from "./productOptionGroupTranslation/ProductOptionGroupTranslationCreate";
import { ProductOptionGroupTranslationEdit } from "./productOptionGroupTranslation/ProductOptionGroupTranslationEdit";
import { ProductOptionGroupTranslationShow } from "./productOptionGroupTranslation/ProductOptionGroupTranslationShow";
import { ProductOptionTranslationList } from "./productOptionTranslation/ProductOptionTranslationList";
import { ProductOptionTranslationCreate } from "./productOptionTranslation/ProductOptionTranslationCreate";
import { ProductOptionTranslationEdit } from "./productOptionTranslation/ProductOptionTranslationEdit";
import { ProductOptionTranslationShow } from "./productOptionTranslation/ProductOptionTranslationShow";
import { ProductTranslationList } from "./productTranslation/ProductTranslationList";
import { ProductTranslationCreate } from "./productTranslation/ProductTranslationCreate";
import { ProductTranslationEdit } from "./productTranslation/ProductTranslationEdit";
import { ProductTranslationShow } from "./productTranslation/ProductTranslationShow";
import { ProductTypeList } from "./productType/ProductTypeList";
import { ProductTypeCreate } from "./productType/ProductTypeCreate";
import { ProductTypeEdit } from "./productType/ProductTypeEdit";
import { ProductTypeShow } from "./productType/ProductTypeShow";
import { ProductTypeTranslationList } from "./productTypeTranslation/ProductTypeTranslationList";
import { ProductTypeTranslationCreate } from "./productTypeTranslation/ProductTypeTranslationCreate";
import { ProductTypeTranslationEdit } from "./productTypeTranslation/ProductTypeTranslationEdit";
import { ProductTypeTranslationShow } from "./productTypeTranslation/ProductTypeTranslationShow";
import { ProductVariantList } from "./productVariant/ProductVariantList";
import { ProductVariantCreate } from "./productVariant/ProductVariantCreate";
import { ProductVariantEdit } from "./productVariant/ProductVariantEdit";
import { ProductVariantShow } from "./productVariant/ProductVariantShow";
import { ProductVariantOptionsProductOptionList } from "./productVariantOptionsProductOption/ProductVariantOptionsProductOptionList";
import { ProductVariantOptionsProductOptionCreate } from "./productVariantOptionsProductOption/ProductVariantOptionsProductOptionCreate";
import { ProductVariantOptionsProductOptionEdit } from "./productVariantOptionsProductOption/ProductVariantOptionsProductOptionEdit";
import { ProductVariantOptionsProductOptionShow } from "./productVariantOptionsProductOption/ProductVariantOptionsProductOptionShow";
import { ProductVariantPriceList } from "./productVariantPrice/ProductVariantPriceList";
import { ProductVariantPriceCreate } from "./productVariantPrice/ProductVariantPriceCreate";
import { ProductVariantPriceEdit } from "./productVariantPrice/ProductVariantPriceEdit";
import { ProductVariantPriceShow } from "./productVariantPrice/ProductVariantPriceShow";
import { ProductVariantSettingList } from "./productVariantSetting/ProductVariantSettingList";
import { ProductVariantSettingCreate } from "./productVariantSetting/ProductVariantSettingCreate";
import { ProductVariantSettingEdit } from "./productVariantSetting/ProductVariantSettingEdit";
import { ProductVariantSettingShow } from "./productVariantSetting/ProductVariantSettingShow";
import { ProposalList } from "./proposal/ProposalList";
import { ProposalCreate } from "./proposal/ProposalCreate";
import { ProposalEdit } from "./proposal/ProposalEdit";
import { ProposalShow } from "./proposal/ProposalShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { ReportCategoryList } from "./reportCategory/ReportCategoryList";
import { ReportCategoryCreate } from "./reportCategory/ReportCategoryCreate";
import { ReportCategoryEdit } from "./reportCategory/ReportCategoryEdit";
import { ReportCategoryShow } from "./reportCategory/ReportCategoryShow";
import { ReportOrganizationList } from "./reportOrganization/ReportOrganizationList";
import { ReportOrganizationCreate } from "./reportOrganization/ReportOrganizationCreate";
import { ReportOrganizationEdit } from "./reportOrganization/ReportOrganizationEdit";
import { ReportOrganizationShow } from "./reportOrganization/ReportOrganizationShow";
import { RequestApprovalList } from "./requestApproval/RequestApprovalList";
import { RequestApprovalCreate } from "./requestApproval/RequestApprovalCreate";
import { RequestApprovalEdit } from "./requestApproval/RequestApprovalEdit";
import { RequestApprovalShow } from "./requestApproval/RequestApprovalShow";
import { RequestApprovalEmployeeList } from "./requestApprovalEmployee/RequestApprovalEmployeeList";
import { RequestApprovalEmployeeCreate } from "./requestApprovalEmployee/RequestApprovalEmployeeCreate";
import { RequestApprovalEmployeeEdit } from "./requestApprovalEmployee/RequestApprovalEmployeeEdit";
import { RequestApprovalEmployeeShow } from "./requestApprovalEmployee/RequestApprovalEmployeeShow";
import { RequestApprovalTeamList } from "./requestApprovalTeam/RequestApprovalTeamList";
import { RequestApprovalTeamCreate } from "./requestApprovalTeam/RequestApprovalTeamCreate";
import { RequestApprovalTeamEdit } from "./requestApprovalTeam/RequestApprovalTeamEdit";
import { RequestApprovalTeamShow } from "./requestApprovalTeam/RequestApprovalTeamShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { RolePermissionList } from "./rolePermission/RolePermissionList";
import { RolePermissionCreate } from "./rolePermission/RolePermissionCreate";
import { RolePermissionEdit } from "./rolePermission/RolePermissionEdit";
import { RolePermissionShow } from "./rolePermission/RolePermissionShow";
import { ScreenshotList } from "./screenshot/ScreenshotList";
import { ScreenshotCreate } from "./screenshot/ScreenshotCreate";
import { ScreenshotEdit } from "./screenshot/ScreenshotEdit";
import { ScreenshotShow } from "./screenshot/ScreenshotShow";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { SkillEmployeeList } from "./skillEmployee/SkillEmployeeList";
import { SkillEmployeeCreate } from "./skillEmployee/SkillEmployeeCreate";
import { SkillEmployeeEdit } from "./skillEmployee/SkillEmployeeEdit";
import { SkillEmployeeShow } from "./skillEmployee/SkillEmployeeShow";
import { SkillOrganizationList } from "./skillOrganization/SkillOrganizationList";
import { SkillOrganizationCreate } from "./skillOrganization/SkillOrganizationCreate";
import { SkillOrganizationEdit } from "./skillOrganization/SkillOrganizationEdit";
import { SkillOrganizationShow } from "./skillOrganization/SkillOrganizationShow";
import { TagList } from "./tag/TagList";
import { TagCreate } from "./tag/TagCreate";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { TagCandidateList } from "./tagCandidate/TagCandidateList";
import { TagCandidateCreate } from "./tagCandidate/TagCandidateCreate";
import { TagCandidateEdit } from "./tagCandidate/TagCandidateEdit";
import { TagCandidateShow } from "./tagCandidate/TagCandidateShow";
import { TagEmployeeList } from "./tagEmployee/TagEmployeeList";
import { TagEmployeeCreate } from "./tagEmployee/TagEmployeeCreate";
import { TagEmployeeEdit } from "./tagEmployee/TagEmployeeEdit";
import { TagEmployeeShow } from "./tagEmployee/TagEmployeeShow";
import { TagEmployeeLevelList } from "./tagEmployeeLevel/TagEmployeeLevelList";
import { TagEmployeeLevelCreate } from "./tagEmployeeLevel/TagEmployeeLevelCreate";
import { TagEmployeeLevelEdit } from "./tagEmployeeLevel/TagEmployeeLevelEdit";
import { TagEmployeeLevelShow } from "./tagEmployeeLevel/TagEmployeeLevelShow";
import { TagEquipmentList } from "./tagEquipment/TagEquipmentList";
import { TagEquipmentCreate } from "./tagEquipment/TagEquipmentCreate";
import { TagEquipmentEdit } from "./tagEquipment/TagEquipmentEdit";
import { TagEquipmentShow } from "./tagEquipment/TagEquipmentShow";
import { TagEventTypeList } from "./tagEventType/TagEventTypeList";
import { TagEventTypeCreate } from "./tagEventType/TagEventTypeCreate";
import { TagEventTypeEdit } from "./tagEventType/TagEventTypeEdit";
import { TagEventTypeShow } from "./tagEventType/TagEventTypeShow";
import { TagExpenseList } from "./tagExpense/TagExpenseList";
import { TagExpenseCreate } from "./tagExpense/TagExpenseCreate";
import { TagExpenseEdit } from "./tagExpense/TagExpenseEdit";
import { TagExpenseShow } from "./tagExpense/TagExpenseShow";
import { TagIncomeList } from "./tagIncome/TagIncomeList";
import { TagIncomeCreate } from "./tagIncome/TagIncomeCreate";
import { TagIncomeEdit } from "./tagIncome/TagIncomeEdit";
import { TagIncomeShow } from "./tagIncome/TagIncomeShow";
import { TagIntegrationList } from "./tagIntegration/TagIntegrationList";
import { TagIntegrationCreate } from "./tagIntegration/TagIntegrationCreate";
import { TagIntegrationEdit } from "./tagIntegration/TagIntegrationEdit";
import { TagIntegrationShow } from "./tagIntegration/TagIntegrationShow";
import { TagInvoiceList } from "./tagInvoice/TagInvoiceList";
import { TagInvoiceCreate } from "./tagInvoice/TagInvoiceCreate";
import { TagInvoiceEdit } from "./tagInvoice/TagInvoiceEdit";
import { TagInvoiceShow } from "./tagInvoice/TagInvoiceShow";
import { TagMerchantList } from "./tagMerchant/TagMerchantList";
import { TagMerchantCreate } from "./tagMerchant/TagMerchantCreate";
import { TagMerchantEdit } from "./tagMerchant/TagMerchantEdit";
import { TagMerchantShow } from "./tagMerchant/TagMerchantShow";
import { TagOrganizationList } from "./tagOrganization/TagOrganizationList";
import { TagOrganizationCreate } from "./tagOrganization/TagOrganizationCreate";
import { TagOrganizationEdit } from "./tagOrganization/TagOrganizationEdit";
import { TagOrganizationShow } from "./tagOrganization/TagOrganizationShow";
import { TagOrganizationContactList } from "./tagOrganizationContact/TagOrganizationContactList";
import { TagOrganizationContactCreate } from "./tagOrganizationContact/TagOrganizationContactCreate";
import { TagOrganizationContactEdit } from "./tagOrganizationContact/TagOrganizationContactEdit";
import { TagOrganizationContactShow } from "./tagOrganizationContact/TagOrganizationContactShow";
import { TagOrganizationDepartmentList } from "./tagOrganizationDepartment/TagOrganizationDepartmentList";
import { TagOrganizationDepartmentCreate } from "./tagOrganizationDepartment/TagOrganizationDepartmentCreate";
import { TagOrganizationDepartmentEdit } from "./tagOrganizationDepartment/TagOrganizationDepartmentEdit";
import { TagOrganizationDepartmentShow } from "./tagOrganizationDepartment/TagOrganizationDepartmentShow";
import { TagOrganizationEmploymentTypeList } from "./tagOrganizationEmploymentType/TagOrganizationEmploymentTypeList";
import { TagOrganizationEmploymentTypeCreate } from "./tagOrganizationEmploymentType/TagOrganizationEmploymentTypeCreate";
import { TagOrganizationEmploymentTypeEdit } from "./tagOrganizationEmploymentType/TagOrganizationEmploymentTypeEdit";
import { TagOrganizationEmploymentTypeShow } from "./tagOrganizationEmploymentType/TagOrganizationEmploymentTypeShow";
import { TagOrganizationExpenseCategoryList } from "./tagOrganizationExpenseCategory/TagOrganizationExpenseCategoryList";
import { TagOrganizationExpenseCategoryCreate } from "./tagOrganizationExpenseCategory/TagOrganizationExpenseCategoryCreate";
import { TagOrganizationExpenseCategoryEdit } from "./tagOrganizationExpenseCategory/TagOrganizationExpenseCategoryEdit";
import { TagOrganizationExpenseCategoryShow } from "./tagOrganizationExpenseCategory/TagOrganizationExpenseCategoryShow";
import { TagOrganizationPositionList } from "./tagOrganizationPosition/TagOrganizationPositionList";
import { TagOrganizationPositionCreate } from "./tagOrganizationPosition/TagOrganizationPositionCreate";
import { TagOrganizationPositionEdit } from "./tagOrganizationPosition/TagOrganizationPositionEdit";
import { TagOrganizationPositionShow } from "./tagOrganizationPosition/TagOrganizationPositionShow";
import { TagOrganizationProjectList } from "./tagOrganizationProject/TagOrganizationProjectList";
import { TagOrganizationProjectCreate } from "./tagOrganizationProject/TagOrganizationProjectCreate";
import { TagOrganizationProjectEdit } from "./tagOrganizationProject/TagOrganizationProjectEdit";
import { TagOrganizationProjectShow } from "./tagOrganizationProject/TagOrganizationProjectShow";
import { TagOrganizationTeamList } from "./tagOrganizationTeam/TagOrganizationTeamList";
import { TagOrganizationTeamCreate } from "./tagOrganizationTeam/TagOrganizationTeamCreate";
import { TagOrganizationTeamEdit } from "./tagOrganizationTeam/TagOrganizationTeamEdit";
import { TagOrganizationTeamShow } from "./tagOrganizationTeam/TagOrganizationTeamShow";
import { TagOrganizationVendorList } from "./tagOrganizationVendor/TagOrganizationVendorList";
import { TagOrganizationVendorCreate } from "./tagOrganizationVendor/TagOrganizationVendorCreate";
import { TagOrganizationVendorEdit } from "./tagOrganizationVendor/TagOrganizationVendorEdit";
import { TagOrganizationVendorShow } from "./tagOrganizationVendor/TagOrganizationVendorShow";
import { TagPaymentList } from "./tagPayment/TagPaymentList";
import { TagPaymentCreate } from "./tagPayment/TagPaymentCreate";
import { TagPaymentEdit } from "./tagPayment/TagPaymentEdit";
import { TagPaymentShow } from "./tagPayment/TagPaymentShow";
import { TagProductList } from "./tagProduct/TagProductList";
import { TagProductCreate } from "./tagProduct/TagProductCreate";
import { TagProductEdit } from "./tagProduct/TagProductEdit";
import { TagProductShow } from "./tagProduct/TagProductShow";
import { TagProposalList } from "./tagProposal/TagProposalList";
import { TagProposalCreate } from "./tagProposal/TagProposalCreate";
import { TagProposalEdit } from "./tagProposal/TagProposalEdit";
import { TagProposalShow } from "./tagProposal/TagProposalShow";
import { TagRequestApprovalList } from "./tagRequestApproval/TagRequestApprovalList";
import { TagRequestApprovalCreate } from "./tagRequestApproval/TagRequestApprovalCreate";
import { TagRequestApprovalEdit } from "./tagRequestApproval/TagRequestApprovalEdit";
import { TagRequestApprovalShow } from "./tagRequestApproval/TagRequestApprovalShow";
import { TagTaskList } from "./tagTask/TagTaskList";
import { TagTaskCreate } from "./tagTask/TagTaskCreate";
import { TagTaskEdit } from "./tagTask/TagTaskEdit";
import { TagTaskShow } from "./tagTask/TagTaskShow";
import { TagUserList } from "./tagUser/TagUserList";
import { TagUserCreate } from "./tagUser/TagUserCreate";
import { TagUserEdit } from "./tagUser/TagUserEdit";
import { TagUserShow } from "./tagUser/TagUserShow";
import { TagWarehouseList } from "./tagWarehouse/TagWarehouseList";
import { TagWarehouseCreate } from "./tagWarehouse/TagWarehouseCreate";
import { TagWarehouseEdit } from "./tagWarehouse/TagWarehouseEdit";
import { TagWarehouseShow } from "./tagWarehouse/TagWarehouseShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { TaskEmployeeList } from "./taskEmployee/TaskEmployeeList";
import { TaskEmployeeCreate } from "./taskEmployee/TaskEmployeeCreate";
import { TaskEmployeeEdit } from "./taskEmployee/TaskEmployeeEdit";
import { TaskEmployeeShow } from "./taskEmployee/TaskEmployeeShow";
import { TaskLinkedIssueList } from "./taskLinkedIssue/TaskLinkedIssueList";
import { TaskLinkedIssueCreate } from "./taskLinkedIssue/TaskLinkedIssueCreate";
import { TaskLinkedIssueEdit } from "./taskLinkedIssue/TaskLinkedIssueEdit";
import { TaskLinkedIssueShow } from "./taskLinkedIssue/TaskLinkedIssueShow";
import { TaskPriorityList } from "./taskPriority/TaskPriorityList";
import { TaskPriorityCreate } from "./taskPriority/TaskPriorityCreate";
import { TaskPriorityEdit } from "./taskPriority/TaskPriorityEdit";
import { TaskPriorityShow } from "./taskPriority/TaskPriorityShow";
import { TaskRelatedIssueTypeList } from "./taskRelatedIssueType/TaskRelatedIssueTypeList";
import { TaskRelatedIssueTypeCreate } from "./taskRelatedIssueType/TaskRelatedIssueTypeCreate";
import { TaskRelatedIssueTypeEdit } from "./taskRelatedIssueType/TaskRelatedIssueTypeEdit";
import { TaskRelatedIssueTypeShow } from "./taskRelatedIssueType/TaskRelatedIssueTypeShow";
import { TaskSizeList } from "./taskSize/TaskSizeList";
import { TaskSizeCreate } from "./taskSize/TaskSizeCreate";
import { TaskSizeEdit } from "./taskSize/TaskSizeEdit";
import { TaskSizeShow } from "./taskSize/TaskSizeShow";
import { TaskStatusList } from "./taskStatus/TaskStatusList";
import { TaskStatusCreate } from "./taskStatus/TaskStatusCreate";
import { TaskStatusEdit } from "./taskStatus/TaskStatusEdit";
import { TaskStatusShow } from "./taskStatus/TaskStatusShow";
import { TaskTeamList } from "./taskTeam/TaskTeamList";
import { TaskTeamCreate } from "./taskTeam/TaskTeamCreate";
import { TaskTeamEdit } from "./taskTeam/TaskTeamEdit";
import { TaskTeamShow } from "./taskTeam/TaskTeamShow";
import { TaskVersionList } from "./taskVersion/TaskVersionList";
import { TaskVersionCreate } from "./taskVersion/TaskVersionCreate";
import { TaskVersionEdit } from "./taskVersion/TaskVersionEdit";
import { TaskVersionShow } from "./taskVersion/TaskVersionShow";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { TenantSettingList } from "./tenantSetting/TenantSettingList";
import { TenantSettingCreate } from "./tenantSetting/TenantSettingCreate";
import { TenantSettingEdit } from "./tenantSetting/TenantSettingEdit";
import { TenantSettingShow } from "./tenantSetting/TenantSettingShow";
import { TimeLogList } from "./timeLog/TimeLogList";
import { TimeLogCreate } from "./timeLog/TimeLogCreate";
import { TimeLogEdit } from "./timeLog/TimeLogEdit";
import { TimeLogShow } from "./timeLog/TimeLogShow";
import { TimeOffPolicyList } from "./timeOffPolicy/TimeOffPolicyList";
import { TimeOffPolicyCreate } from "./timeOffPolicy/TimeOffPolicyCreate";
import { TimeOffPolicyEdit } from "./timeOffPolicy/TimeOffPolicyEdit";
import { TimeOffPolicyShow } from "./timeOffPolicy/TimeOffPolicyShow";
import { TimeOffPolicyEmployeeList } from "./timeOffPolicyEmployee/TimeOffPolicyEmployeeList";
import { TimeOffPolicyEmployeeCreate } from "./timeOffPolicyEmployee/TimeOffPolicyEmployeeCreate";
import { TimeOffPolicyEmployeeEdit } from "./timeOffPolicyEmployee/TimeOffPolicyEmployeeEdit";
import { TimeOffPolicyEmployeeShow } from "./timeOffPolicyEmployee/TimeOffPolicyEmployeeShow";
import { TimeOffRequestList } from "./timeOffRequest/TimeOffRequestList";
import { TimeOffRequestCreate } from "./timeOffRequest/TimeOffRequestCreate";
import { TimeOffRequestEdit } from "./timeOffRequest/TimeOffRequestEdit";
import { TimeOffRequestShow } from "./timeOffRequest/TimeOffRequestShow";
import { TimeOffRequestEmployeeList } from "./timeOffRequestEmployee/TimeOffRequestEmployeeList";
import { TimeOffRequestEmployeeCreate } from "./timeOffRequestEmployee/TimeOffRequestEmployeeCreate";
import { TimeOffRequestEmployeeEdit } from "./timeOffRequestEmployee/TimeOffRequestEmployeeEdit";
import { TimeOffRequestEmployeeShow } from "./timeOffRequestEmployee/TimeOffRequestEmployeeShow";
import { TimeSlotList } from "./timeSlot/TimeSlotList";
import { TimeSlotCreate } from "./timeSlot/TimeSlotCreate";
import { TimeSlotEdit } from "./timeSlot/TimeSlotEdit";
import { TimeSlotShow } from "./timeSlot/TimeSlotShow";
import { TimeSlotMinuteList } from "./timeSlotMinute/TimeSlotMinuteList";
import { TimeSlotMinuteCreate } from "./timeSlotMinute/TimeSlotMinuteCreate";
import { TimeSlotMinuteEdit } from "./timeSlotMinute/TimeSlotMinuteEdit";
import { TimeSlotMinuteShow } from "./timeSlotMinute/TimeSlotMinuteShow";
import { TimeSlotTimeLogList } from "./timeSlotTimeLog/TimeSlotTimeLogList";
import { TimeSlotTimeLogCreate } from "./timeSlotTimeLog/TimeSlotTimeLogCreate";
import { TimeSlotTimeLogEdit } from "./timeSlotTimeLog/TimeSlotTimeLogEdit";
import { TimeSlotTimeLogShow } from "./timeSlotTimeLog/TimeSlotTimeLogShow";
import { TimesheetList } from "./timesheet/TimesheetList";
import { TimesheetCreate } from "./timesheet/TimesheetCreate";
import { TimesheetEdit } from "./timesheet/TimesheetEdit";
import { TimesheetShow } from "./timesheet/TimesheetShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserOrganizationList } from "./userOrganization/UserOrganizationList";
import { UserOrganizationCreate } from "./userOrganization/UserOrganizationCreate";
import { UserOrganizationEdit } from "./userOrganization/UserOrganizationEdit";
import { UserOrganizationShow } from "./userOrganization/UserOrganizationShow";
import { WarehouseList } from "./warehouse/WarehouseList";
import { WarehouseCreate } from "./warehouse/WarehouseCreate";
import { WarehouseEdit } from "./warehouse/WarehouseEdit";
import { WarehouseShow } from "./warehouse/WarehouseShow";
import { WarehouseMerchantList } from "./warehouseMerchant/WarehouseMerchantList";
import { WarehouseMerchantCreate } from "./warehouseMerchant/WarehouseMerchantCreate";
import { WarehouseMerchantEdit } from "./warehouseMerchant/WarehouseMerchantEdit";
import { WarehouseMerchantShow } from "./warehouseMerchant/WarehouseMerchantShow";
import { WarehouseProductList } from "./warehouseProduct/WarehouseProductList";
import { WarehouseProductCreate } from "./warehouseProduct/WarehouseProductCreate";
import { WarehouseProductEdit } from "./warehouseProduct/WarehouseProductEdit";
import { WarehouseProductShow } from "./warehouseProduct/WarehouseProductShow";
import { WarehouseProductVariantList } from "./warehouseProductVariant/WarehouseProductVariantList";
import { WarehouseProductVariantCreate } from "./warehouseProductVariant/WarehouseProductVariantCreate";
import { WarehouseProductVariantEdit } from "./warehouseProductVariant/WarehouseProductVariantEdit";
import { WarehouseProductVariantShow } from "./warehouseProductVariant/WarehouseProductVariantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"dave"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AccountingTemplate"
          list={AccountingTemplateList}
          edit={AccountingTemplateEdit}
          create={AccountingTemplateCreate}
          show={AccountingTemplateShow}
        />
        <Resource
          name="Activity"
          list={ActivityList}
          edit={ActivityEdit}
          create={ActivityCreate}
          show={ActivityShow}
        />
        <Resource
          name="AppointmentEmployee"
          list={AppointmentEmployeeList}
          edit={AppointmentEmployeeEdit}
          create={AppointmentEmployeeCreate}
          show={AppointmentEmployeeShow}
        />
        <Resource
          name="ApprovalPolicy"
          list={ApprovalPolicyList}
          edit={ApprovalPolicyEdit}
          create={ApprovalPolicyCreate}
          show={ApprovalPolicyShow}
        />
        <Resource
          name="AvailabilitySlot"
          list={AvailabilitySlotList}
          edit={AvailabilitySlotEdit}
          create={AvailabilitySlotCreate}
          show={AvailabilitySlotShow}
        />
        <Resource
          name="Candidate"
          list={CandidateList}
          edit={CandidateEdit}
          create={CandidateCreate}
          show={CandidateShow}
        />
        <Resource
          name="CandidateCriterionRating"
          list={CandidateCriterionRatingList}
          edit={CandidateCriterionRatingEdit}
          create={CandidateCriterionRatingCreate}
          show={CandidateCriterionRatingShow}
        />
        <Resource
          name="CandidateDepartment"
          list={CandidateDepartmentList}
          edit={CandidateDepartmentEdit}
          create={CandidateDepartmentCreate}
          show={CandidateDepartmentShow}
        />
        <Resource
          name="CandidateDocument"
          list={CandidateDocumentList}
          edit={CandidateDocumentEdit}
          create={CandidateDocumentCreate}
          show={CandidateDocumentShow}
        />
        <Resource
          name="CandidateEducation"
          list={CandidateEducationList}
          edit={CandidateEducationEdit}
          create={CandidateEducationCreate}
          show={CandidateEducationShow}
        />
        <Resource
          name="CandidateEmploymentType"
          list={CandidateEmploymentTypeList}
          edit={CandidateEmploymentTypeEdit}
          create={CandidateEmploymentTypeCreate}
          show={CandidateEmploymentTypeShow}
        />
        <Resource
          name="CandidateExperience"
          list={CandidateExperienceList}
          edit={CandidateExperienceEdit}
          create={CandidateExperienceCreate}
          show={CandidateExperienceShow}
        />
        <Resource
          name="CandidateFeedback"
          list={CandidateFeedbackList}
          edit={CandidateFeedbackEdit}
          create={CandidateFeedbackCreate}
          show={CandidateFeedbackShow}
        />
        <Resource
          name="CandidateInterview"
          list={CandidateInterviewList}
          edit={CandidateInterviewEdit}
          create={CandidateInterviewCreate}
          show={CandidateInterviewShow}
        />
        <Resource
          name="CandidateInterviewer"
          list={CandidateInterviewerList}
          edit={CandidateInterviewerEdit}
          create={CandidateInterviewerCreate}
          show={CandidateInterviewerShow}
        />
        <Resource
          name="CandidatePersonalQuality"
          list={CandidatePersonalQualityList}
          edit={CandidatePersonalQualityEdit}
          create={CandidatePersonalQualityCreate}
          show={CandidatePersonalQualityShow}
        />
        <Resource
          name="CandidateSkill"
          list={CandidateSkillList}
          edit={CandidateSkillEdit}
          create={CandidateSkillCreate}
          show={CandidateSkillShow}
        />
        <Resource
          name="CandidateSource"
          list={CandidateSourceList}
          edit={CandidateSourceEdit}
          create={CandidateSourceCreate}
          show={CandidateSourceShow}
        />
        <Resource
          name="CandidateTechnology"
          list={CandidateTechnologyList}
          edit={CandidateTechnologyEdit}
          create={CandidateTechnologyCreate}
          show={CandidateTechnologyShow}
        />
        <Resource
          name="Changelog"
          list={ChangelogList}
          edit={ChangelogEdit}
          create={ChangelogCreate}
          show={ChangelogShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="Country"
          list={CountryList}
          edit={CountryEdit}
          create={CountryCreate}
          show={CountryShow}
        />
        <Resource
          name="Currency"
          list={CurrencyList}
          edit={CurrencyEdit}
          create={CurrencyCreate}
          show={CurrencyShow}
        />
        <Resource
          name="CustomSmtp"
          list={CustomSmtpList}
          edit={CustomSmtpEdit}
          create={CustomSmtpCreate}
          show={CustomSmtpShow}
        />
        <Resource
          name="Deal"
          list={DealList}
          edit={DealEdit}
          create={DealCreate}
          show={DealShow}
        />
        <Resource
          name="EmailReset"
          list={EmailResetList}
          edit={EmailResetEdit}
          create={EmailResetCreate}
          show={EmailResetShow}
        />
        <Resource
          name="EmailSent"
          list={EmailSentList}
          edit={EmailSentEdit}
          create={EmailSentCreate}
          show={EmailSentShow}
        />
        <Resource
          name="EmailTemplate"
          list={EmailTemplateList}
          edit={EmailTemplateEdit}
          create={EmailTemplateCreate}
          show={EmailTemplateShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="EmployeeAppointment"
          list={EmployeeAppointmentList}
          edit={EmployeeAppointmentEdit}
          create={EmployeeAppointmentCreate}
          show={EmployeeAppointmentShow}
        />
        <Resource
          name="EmployeeAward"
          list={EmployeeAwardList}
          edit={EmployeeAwardEdit}
          create={EmployeeAwardCreate}
          show={EmployeeAwardShow}
        />
        <Resource
          name="EmployeeJobPreset"
          list={EmployeeJobPresetList}
          edit={EmployeeJobPresetEdit}
          create={EmployeeJobPresetCreate}
          show={EmployeeJobPresetShow}
        />
        <Resource
          name="EmployeeLevel"
          list={EmployeeLevelList}
          edit={EmployeeLevelEdit}
          create={EmployeeLevelCreate}
          show={EmployeeLevelShow}
        />
        <Resource
          name="EmployeePhone"
          list={EmployeePhoneList}
          edit={EmployeePhoneEdit}
          create={EmployeePhoneCreate}
          show={EmployeePhoneShow}
        />
        <Resource
          name="EmployeeProposalTemplate"
          list={EmployeeProposalTemplateList}
          edit={EmployeeProposalTemplateEdit}
          create={EmployeeProposalTemplateCreate}
          show={EmployeeProposalTemplateShow}
        />
        <Resource
          name="EmployeeRecurringExpense"
          list={EmployeeRecurringExpenseList}
          edit={EmployeeRecurringExpenseEdit}
          create={EmployeeRecurringExpenseCreate}
          show={EmployeeRecurringExpenseShow}
        />
        <Resource
          name="EmployeeSetting"
          list={EmployeeSettingList}
          edit={EmployeeSettingEdit}
          create={EmployeeSettingCreate}
          show={EmployeeSettingShow}
        />
        <Resource
          name="EmployeeTasksTask"
          list={EmployeeTasksTaskList}
          edit={EmployeeTasksTaskEdit}
          create={EmployeeTasksTaskCreate}
          show={EmployeeTasksTaskShow}
        />
        <Resource
          name="EmployeeUpworkJobSearchCriterion"
          list={EmployeeUpworkJobSearchCriterionList}
          edit={EmployeeUpworkJobSearchCriterionEdit}
          create={EmployeeUpworkJobSearchCriterionCreate}
          show={EmployeeUpworkJobSearchCriterionShow}
        />
        <Resource
          name="Equipment"
          list={EquipmentList}
          edit={EquipmentEdit}
          create={EquipmentCreate}
          show={EquipmentShow}
        />
        <Resource
          name="EquipmentSharesEmployee"
          list={EquipmentSharesEmployeeList}
          edit={EquipmentSharesEmployeeEdit}
          create={EquipmentSharesEmployeeCreate}
          show={EquipmentSharesEmployeeShow}
        />
        <Resource
          name="EquipmentSharesTeam"
          list={EquipmentSharesTeamList}
          edit={EquipmentSharesTeamEdit}
          create={EquipmentSharesTeamCreate}
          show={EquipmentSharesTeamShow}
        />
        <Resource
          name="EquipmentSharing"
          list={EquipmentSharingList}
          edit={EquipmentSharingEdit}
          create={EquipmentSharingCreate}
          show={EquipmentSharingShow}
        />
        <Resource
          name="EquipmentSharingPolicy"
          list={EquipmentSharingPolicyList}
          edit={EquipmentSharingPolicyEdit}
          create={EquipmentSharingPolicyCreate}
          show={EquipmentSharingPolicyShow}
        />
        <Resource
          name="EstimateEmail"
          list={EstimateEmailList}
          edit={EstimateEmailEdit}
          create={EstimateEmailCreate}
          show={EstimateEmailShow}
        />
        <Resource
          name="EventType"
          list={EventTypeList}
          edit={EventTypeEdit}
          create={EventTypeCreate}
          show={EventTypeShow}
        />
        <Resource
          name="Expense"
          list={ExpenseList}
          edit={ExpenseEdit}
          create={ExpenseCreate}
          show={ExpenseShow}
        />
        <Resource
          name="ExpenseCategory"
          list={ExpenseCategoryList}
          edit={ExpenseCategoryEdit}
          create={ExpenseCategoryCreate}
          show={ExpenseCategoryShow}
        />
        <Resource
          name="Feature"
          list={FeatureList}
          edit={FeatureEdit}
          create={FeatureCreate}
          show={FeatureShow}
        />
        <Resource
          name="FeatureOrganization"
          list={FeatureOrganizationList}
          edit={FeatureOrganizationEdit}
          create={FeatureOrganizationCreate}
          show={FeatureOrganizationShow}
        />
        <Resource
          name="Goal"
          list={GoalList}
          edit={GoalEdit}
          create={GoalCreate}
          show={GoalShow}
        />
        <Resource
          name="GoalGeneralSetting"
          list={GoalGeneralSettingList}
          edit={GoalGeneralSettingEdit}
          create={GoalGeneralSettingCreate}
          show={GoalGeneralSettingShow}
        />
        <Resource
          name="GoalKpi"
          list={GoalKpiList}
          edit={GoalKpiEdit}
          create={GoalKpiCreate}
          show={GoalKpiShow}
        />
        <Resource
          name="GoalKpiTemplate"
          list={GoalKpiTemplateList}
          edit={GoalKpiTemplateEdit}
          create={GoalKpiTemplateCreate}
          show={GoalKpiTemplateShow}
        />
        <Resource
          name="GoalTemplate"
          list={GoalTemplateList}
          edit={GoalTemplateEdit}
          create={GoalTemplateCreate}
          show={GoalTemplateShow}
        />
        <Resource
          name="GoalTimeFrame"
          list={GoalTimeFrameList}
          edit={GoalTimeFrameEdit}
          create={GoalTimeFrameCreate}
          show={GoalTimeFrameShow}
        />
        <Resource
          name="ImageAsset"
          list={ImageAssetList}
          edit={ImageAssetEdit}
          create={ImageAssetCreate}
          show={ImageAssetShow}
        />
        <Resource
          name="ImportHistory"
          list={ImportHistoryList}
          edit={ImportHistoryEdit}
          create={ImportHistoryCreate}
          show={ImportHistoryShow}
        />
        <Resource
          name="ImportRecord"
          list={ImportRecordList}
          edit={ImportRecordEdit}
          create={ImportRecordCreate}
          show={ImportRecordShow}
        />
        <Resource
          name="Income"
          list={IncomeList}
          edit={IncomeEdit}
          create={IncomeCreate}
          show={IncomeShow}
        />
        <Resource
          name="Integration"
          list={IntegrationList}
          edit={IntegrationEdit}
          create={IntegrationCreate}
          show={IntegrationShow}
        />
        <Resource
          name="IntegrationEntitySetting"
          list={IntegrationEntitySettingList}
          edit={IntegrationEntitySettingEdit}
          create={IntegrationEntitySettingCreate}
          show={IntegrationEntitySettingShow}
        />
        <Resource
          name="IntegrationEntitySettingTied"
          list={IntegrationEntitySettingTiedList}
          edit={IntegrationEntitySettingTiedEdit}
          create={IntegrationEntitySettingTiedCreate}
          show={IntegrationEntitySettingTiedShow}
        />
        <Resource
          name="IntegrationIntegrationType"
          list={IntegrationIntegrationTypeList}
          edit={IntegrationIntegrationTypeEdit}
          create={IntegrationIntegrationTypeCreate}
          show={IntegrationIntegrationTypeShow}
        />
        <Resource
          name="IntegrationMap"
          list={IntegrationMapList}
          edit={IntegrationMapEdit}
          create={IntegrationMapCreate}
          show={IntegrationMapShow}
        />
        <Resource
          name="IntegrationSetting"
          list={IntegrationSettingList}
          edit={IntegrationSettingEdit}
          create={IntegrationSettingCreate}
          show={IntegrationSettingShow}
        />
        <Resource
          name="IntegrationTenant"
          list={IntegrationTenantList}
          edit={IntegrationTenantEdit}
          create={IntegrationTenantCreate}
          show={IntegrationTenantShow}
        />
        <Resource
          name="IntegrationType"
          list={IntegrationTypeList}
          edit={IntegrationTypeEdit}
          create={IntegrationTypeCreate}
          show={IntegrationTypeShow}
        />
        <Resource
          name="Invite"
          list={InviteList}
          edit={InviteEdit}
          create={InviteCreate}
          show={InviteShow}
        />
        <Resource
          name="InviteOrganizationContact"
          list={InviteOrganizationContactList}
          edit={InviteOrganizationContactEdit}
          create={InviteOrganizationContactCreate}
          show={InviteOrganizationContactShow}
        />
        <Resource
          name="InviteOrganizationDepartment"
          list={InviteOrganizationDepartmentList}
          edit={InviteOrganizationDepartmentEdit}
          create={InviteOrganizationDepartmentCreate}
          show={InviteOrganizationDepartmentShow}
        />
        <Resource
          name="InviteOrganizationProject"
          list={InviteOrganizationProjectList}
          edit={InviteOrganizationProjectEdit}
          create={InviteOrganizationProjectCreate}
          show={InviteOrganizationProjectShow}
        />
        <Resource
          name="InviteOrganizationTeam"
          list={InviteOrganizationTeamList}
          edit={InviteOrganizationTeamEdit}
          create={InviteOrganizationTeamCreate}
          show={InviteOrganizationTeamShow}
        />
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="InvoiceEstimateHistory"
          list={InvoiceEstimateHistoryList}
          edit={InvoiceEstimateHistoryEdit}
          create={InvoiceEstimateHistoryCreate}
          show={InvoiceEstimateHistoryShow}
        />
        <Resource
          name="InvoiceItem"
          list={InvoiceItemList}
          edit={InvoiceItemEdit}
          create={InvoiceItemCreate}
          show={InvoiceItemShow}
        />
        <Resource
          name="IssueType"
          list={IssueTypeList}
          edit={IssueTypeEdit}
          create={IssueTypeCreate}
          show={IssueTypeShow}
        />
        <Resource
          name="JobPreset"
          list={JobPresetList}
          edit={JobPresetEdit}
          create={JobPresetCreate}
          show={JobPresetShow}
        />
        <Resource
          name="JobPresetUpworkJobSearchCriterion"
          list={JobPresetUpworkJobSearchCriterionList}
          edit={JobPresetUpworkJobSearchCriterionEdit}
          create={JobPresetUpworkJobSearchCriterionCreate}
          show={JobPresetUpworkJobSearchCriterionShow}
        />
        <Resource
          name="JobSearchCategory"
          list={JobSearchCategoryList}
          edit={JobSearchCategoryEdit}
          create={JobSearchCategoryCreate}
          show={JobSearchCategoryShow}
        />
        <Resource
          name="JobSearchOccupation"
          list={JobSearchOccupationList}
          edit={JobSearchOccupationEdit}
          create={JobSearchOccupationCreate}
          show={JobSearchOccupationShow}
        />
        <Resource
          name="KeyResult"
          list={KeyResultList}
          edit={KeyResultEdit}
          create={KeyResultCreate}
          show={KeyResultShow}
        />
        <Resource
          name="KeyResultTemplate"
          list={KeyResultTemplateList}
          edit={KeyResultTemplateEdit}
          create={KeyResultTemplateCreate}
          show={KeyResultTemplateShow}
        />
        <Resource
          name="KeyResultUpdate"
          list={KeyResultUpdateList}
          edit={KeyResultUpdateEdit}
          create={KeyResultUpdateCreate}
          show={KeyResultUpdateShow}
        />
        <Resource
          name="KnowledgeBase"
          list={KnowledgeBaseList}
          edit={KnowledgeBaseEdit}
          create={KnowledgeBaseCreate}
          show={KnowledgeBaseShow}
        />
        <Resource
          name="KnowledgeBaseArticle"
          list={KnowledgeBaseArticleList}
          edit={KnowledgeBaseArticleEdit}
          create={KnowledgeBaseArticleCreate}
          show={KnowledgeBaseArticleShow}
        />
        <Resource
          name="KnowledgeBaseAuthor"
          list={KnowledgeBaseAuthorList}
          edit={KnowledgeBaseAuthorEdit}
          create={KnowledgeBaseAuthorCreate}
          show={KnowledgeBaseAuthorShow}
        />
        <Resource
          name="Language"
          list={LanguageList}
          edit={LanguageEdit}
          create={LanguageCreate}
          show={LanguageShow}
        />
        <Resource
          name="Merchant"
          list={MerchantList}
          edit={MerchantEdit}
          create={MerchantCreate}
          show={MerchantShow}
        />
        <Resource
          name="Migration"
          list={MigrationList}
          edit={MigrationEdit}
          create={MigrationCreate}
          show={MigrationShow}
        />
        <Resource
          name="Organization"
          list={OrganizationList}
          edit={OrganizationEdit}
          create={OrganizationCreate}
          show={OrganizationShow}
        />
        <Resource
          name="OrganizationAward"
          list={OrganizationAwardList}
          edit={OrganizationAwardEdit}
          create={OrganizationAwardCreate}
          show={OrganizationAwardShow}
        />
        <Resource
          name="OrganizationContact"
          list={OrganizationContactList}
          edit={OrganizationContactEdit}
          create={OrganizationContactCreate}
          show={OrganizationContactShow}
        />
        <Resource
          name="OrganizationContactEmployee"
          list={OrganizationContactEmployeeList}
          edit={OrganizationContactEmployeeEdit}
          create={OrganizationContactEmployeeCreate}
          show={OrganizationContactEmployeeShow}
        />
        <Resource
          name="OrganizationDepartment"
          list={OrganizationDepartmentList}
          edit={OrganizationDepartmentEdit}
          create={OrganizationDepartmentCreate}
          show={OrganizationDepartmentShow}
        />
        <Resource
          name="OrganizationDepartmentEmployee"
          list={OrganizationDepartmentEmployeeList}
          edit={OrganizationDepartmentEmployeeEdit}
          create={OrganizationDepartmentEmployeeCreate}
          show={OrganizationDepartmentEmployeeShow}
        />
        <Resource
          name="OrganizationDocument"
          list={OrganizationDocumentList}
          edit={OrganizationDocumentEdit}
          create={OrganizationDocumentCreate}
          show={OrganizationDocumentShow}
        />
        <Resource
          name="OrganizationEmploymentType"
          list={OrganizationEmploymentTypeList}
          edit={OrganizationEmploymentTypeEdit}
          create={OrganizationEmploymentTypeCreate}
          show={OrganizationEmploymentTypeShow}
        />
        <Resource
          name="OrganizationEmploymentTypeEmployee"
          list={OrganizationEmploymentTypeEmployeeList}
          edit={OrganizationEmploymentTypeEmployeeEdit}
          create={OrganizationEmploymentTypeEmployeeCreate}
          show={OrganizationEmploymentTypeEmployeeShow}
        />
        <Resource
          name="OrganizationLanguage"
          list={OrganizationLanguageList}
          edit={OrganizationLanguageEdit}
          create={OrganizationLanguageCreate}
          show={OrganizationLanguageShow}
        />
        <Resource
          name="OrganizationPosition"
          list={OrganizationPositionList}
          edit={OrganizationPositionEdit}
          create={OrganizationPositionCreate}
          show={OrganizationPositionShow}
        />
        <Resource
          name="OrganizationProject"
          list={OrganizationProjectList}
          edit={OrganizationProjectEdit}
          create={OrganizationProjectCreate}
          show={OrganizationProjectShow}
        />
        <Resource
          name="OrganizationProjectEmployee"
          list={OrganizationProjectEmployeeList}
          edit={OrganizationProjectEmployeeEdit}
          create={OrganizationProjectEmployeeCreate}
          show={OrganizationProjectEmployeeShow}
        />
        <Resource
          name="OrganizationRecurringExpense"
          list={OrganizationRecurringExpenseList}
          edit={OrganizationRecurringExpenseEdit}
          create={OrganizationRecurringExpenseCreate}
          show={OrganizationRecurringExpenseShow}
        />
        <Resource
          name="OrganizationSprint"
          list={OrganizationSprintList}
          edit={OrganizationSprintEdit}
          create={OrganizationSprintCreate}
          show={OrganizationSprintShow}
        />
        <Resource
          name="OrganizationTaskSetting"
          list={OrganizationTaskSettingList}
          edit={OrganizationTaskSettingEdit}
          create={OrganizationTaskSettingCreate}
          show={OrganizationTaskSettingShow}
        />
        <Resource
          name="OrganizationTeam"
          list={OrganizationTeamList}
          edit={OrganizationTeamEdit}
          create={OrganizationTeamCreate}
          show={OrganizationTeamShow}
        />
        <Resource
          name="OrganizationTeamEmployee"
          list={OrganizationTeamEmployeeList}
          edit={OrganizationTeamEmployeeEdit}
          create={OrganizationTeamEmployeeCreate}
          show={OrganizationTeamEmployeeShow}
        />
        <Resource
          name="OrganizationTeamJoinRequest"
          list={OrganizationTeamJoinRequestList}
          edit={OrganizationTeamJoinRequestEdit}
          create={OrganizationTeamJoinRequestCreate}
          show={OrganizationTeamJoinRequestShow}
        />
        <Resource
          name="OrganizationTeamTasksTask"
          list={OrganizationTeamTasksTaskList}
          edit={OrganizationTeamTasksTaskEdit}
          create={OrganizationTeamTasksTaskCreate}
          show={OrganizationTeamTasksTaskShow}
        />
        <Resource
          name="OrganizationVendor"
          list={OrganizationVendorList}
          edit={OrganizationVendorEdit}
          create={OrganizationVendorCreate}
          show={OrganizationVendorShow}
        />
        <Resource
          name="PasswordReset"
          list={PasswordResetList}
          edit={PasswordResetEdit}
          create={PasswordResetCreate}
          show={PasswordResetShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Pipeline"
          list={PipelineList}
          edit={PipelineEdit}
          create={PipelineCreate}
          show={PipelineShow}
        />
        <Resource
          name="PipelineStage"
          list={PipelineStageList}
          edit={PipelineStageEdit}
          create={PipelineStageCreate}
          show={PipelineStageShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="ProductCategory"
          list={ProductCategoryList}
          edit={ProductCategoryEdit}
          create={ProductCategoryCreate}
          show={ProductCategoryShow}
        />
        <Resource
          name="ProductCategoryTranslation"
          list={ProductCategoryTranslationList}
          edit={ProductCategoryTranslationEdit}
          create={ProductCategoryTranslationCreate}
          show={ProductCategoryTranslationShow}
        />
        <Resource
          name="ProductGalleryItem"
          list={ProductGalleryItemList}
          edit={ProductGalleryItemEdit}
          create={ProductGalleryItemCreate}
          show={ProductGalleryItemShow}
        />
        <Resource
          name="ProductOption"
          list={ProductOptionList}
          edit={ProductOptionEdit}
          create={ProductOptionCreate}
          show={ProductOptionShow}
        />
        <Resource
          name="ProductOptionGroup"
          list={ProductOptionGroupList}
          edit={ProductOptionGroupEdit}
          create={ProductOptionGroupCreate}
          show={ProductOptionGroupShow}
        />
        <Resource
          name="ProductOptionGroupTranslation"
          list={ProductOptionGroupTranslationList}
          edit={ProductOptionGroupTranslationEdit}
          create={ProductOptionGroupTranslationCreate}
          show={ProductOptionGroupTranslationShow}
        />
        <Resource
          name="ProductOptionTranslation"
          list={ProductOptionTranslationList}
          edit={ProductOptionTranslationEdit}
          create={ProductOptionTranslationCreate}
          show={ProductOptionTranslationShow}
        />
        <Resource
          name="ProductTranslation"
          list={ProductTranslationList}
          edit={ProductTranslationEdit}
          create={ProductTranslationCreate}
          show={ProductTranslationShow}
        />
        <Resource
          name="ProductType"
          list={ProductTypeList}
          edit={ProductTypeEdit}
          create={ProductTypeCreate}
          show={ProductTypeShow}
        />
        <Resource
          name="ProductTypeTranslation"
          list={ProductTypeTranslationList}
          edit={ProductTypeTranslationEdit}
          create={ProductTypeTranslationCreate}
          show={ProductTypeTranslationShow}
        />
        <Resource
          name="ProductVariant"
          list={ProductVariantList}
          edit={ProductVariantEdit}
          create={ProductVariantCreate}
          show={ProductVariantShow}
        />
        <Resource
          name="ProductVariantOptionsProductOption"
          list={ProductVariantOptionsProductOptionList}
          edit={ProductVariantOptionsProductOptionEdit}
          create={ProductVariantOptionsProductOptionCreate}
          show={ProductVariantOptionsProductOptionShow}
        />
        <Resource
          name="ProductVariantPrice"
          list={ProductVariantPriceList}
          edit={ProductVariantPriceEdit}
          create={ProductVariantPriceCreate}
          show={ProductVariantPriceShow}
        />
        <Resource
          name="ProductVariantSetting"
          list={ProductVariantSettingList}
          edit={ProductVariantSettingEdit}
          create={ProductVariantSettingCreate}
          show={ProductVariantSettingShow}
        />
        <Resource
          name="Proposal"
          list={ProposalList}
          edit={ProposalEdit}
          create={ProposalCreate}
          show={ProposalShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="ReportCategory"
          list={ReportCategoryList}
          edit={ReportCategoryEdit}
          create={ReportCategoryCreate}
          show={ReportCategoryShow}
        />
        <Resource
          name="ReportOrganization"
          list={ReportOrganizationList}
          edit={ReportOrganizationEdit}
          create={ReportOrganizationCreate}
          show={ReportOrganizationShow}
        />
        <Resource
          name="RequestApproval"
          list={RequestApprovalList}
          edit={RequestApprovalEdit}
          create={RequestApprovalCreate}
          show={RequestApprovalShow}
        />
        <Resource
          name="RequestApprovalEmployee"
          list={RequestApprovalEmployeeList}
          edit={RequestApprovalEmployeeEdit}
          create={RequestApprovalEmployeeCreate}
          show={RequestApprovalEmployeeShow}
        />
        <Resource
          name="RequestApprovalTeam"
          list={RequestApprovalTeamList}
          edit={RequestApprovalTeamEdit}
          create={RequestApprovalTeamCreate}
          show={RequestApprovalTeamShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="RolePermission"
          list={RolePermissionList}
          edit={RolePermissionEdit}
          create={RolePermissionCreate}
          show={RolePermissionShow}
        />
        <Resource
          name="Screenshot"
          list={ScreenshotList}
          edit={ScreenshotEdit}
          create={ScreenshotCreate}
          show={ScreenshotShow}
        />
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
        <Resource
          name="SkillEmployee"
          list={SkillEmployeeList}
          edit={SkillEmployeeEdit}
          create={SkillEmployeeCreate}
          show={SkillEmployeeShow}
        />
        <Resource
          name="SkillOrganization"
          list={SkillOrganizationList}
          edit={SkillOrganizationEdit}
          create={SkillOrganizationCreate}
          show={SkillOrganizationShow}
        />
        <Resource
          name="Tag"
          list={TagList}
          edit={TagEdit}
          create={TagCreate}
          show={TagShow}
        />
        <Resource
          name="TagCandidate"
          list={TagCandidateList}
          edit={TagCandidateEdit}
          create={TagCandidateCreate}
          show={TagCandidateShow}
        />
        <Resource
          name="TagEmployee"
          list={TagEmployeeList}
          edit={TagEmployeeEdit}
          create={TagEmployeeCreate}
          show={TagEmployeeShow}
        />
        <Resource
          name="TagEmployeeLevel"
          list={TagEmployeeLevelList}
          edit={TagEmployeeLevelEdit}
          create={TagEmployeeLevelCreate}
          show={TagEmployeeLevelShow}
        />
        <Resource
          name="TagEquipment"
          list={TagEquipmentList}
          edit={TagEquipmentEdit}
          create={TagEquipmentCreate}
          show={TagEquipmentShow}
        />
        <Resource
          name="TagEventType"
          list={TagEventTypeList}
          edit={TagEventTypeEdit}
          create={TagEventTypeCreate}
          show={TagEventTypeShow}
        />
        <Resource
          name="TagExpense"
          list={TagExpenseList}
          edit={TagExpenseEdit}
          create={TagExpenseCreate}
          show={TagExpenseShow}
        />
        <Resource
          name="TagIncome"
          list={TagIncomeList}
          edit={TagIncomeEdit}
          create={TagIncomeCreate}
          show={TagIncomeShow}
        />
        <Resource
          name="TagIntegration"
          list={TagIntegrationList}
          edit={TagIntegrationEdit}
          create={TagIntegrationCreate}
          show={TagIntegrationShow}
        />
        <Resource
          name="TagInvoice"
          list={TagInvoiceList}
          edit={TagInvoiceEdit}
          create={TagInvoiceCreate}
          show={TagInvoiceShow}
        />
        <Resource
          name="TagMerchant"
          list={TagMerchantList}
          edit={TagMerchantEdit}
          create={TagMerchantCreate}
          show={TagMerchantShow}
        />
        <Resource
          name="TagOrganization"
          list={TagOrganizationList}
          edit={TagOrganizationEdit}
          create={TagOrganizationCreate}
          show={TagOrganizationShow}
        />
        <Resource
          name="TagOrganizationContact"
          list={TagOrganizationContactList}
          edit={TagOrganizationContactEdit}
          create={TagOrganizationContactCreate}
          show={TagOrganizationContactShow}
        />
        <Resource
          name="TagOrganizationDepartment"
          list={TagOrganizationDepartmentList}
          edit={TagOrganizationDepartmentEdit}
          create={TagOrganizationDepartmentCreate}
          show={TagOrganizationDepartmentShow}
        />
        <Resource
          name="TagOrganizationEmploymentType"
          list={TagOrganizationEmploymentTypeList}
          edit={TagOrganizationEmploymentTypeEdit}
          create={TagOrganizationEmploymentTypeCreate}
          show={TagOrganizationEmploymentTypeShow}
        />
        <Resource
          name="TagOrganizationExpenseCategory"
          list={TagOrganizationExpenseCategoryList}
          edit={TagOrganizationExpenseCategoryEdit}
          create={TagOrganizationExpenseCategoryCreate}
          show={TagOrganizationExpenseCategoryShow}
        />
        <Resource
          name="TagOrganizationPosition"
          list={TagOrganizationPositionList}
          edit={TagOrganizationPositionEdit}
          create={TagOrganizationPositionCreate}
          show={TagOrganizationPositionShow}
        />
        <Resource
          name="TagOrganizationProject"
          list={TagOrganizationProjectList}
          edit={TagOrganizationProjectEdit}
          create={TagOrganizationProjectCreate}
          show={TagOrganizationProjectShow}
        />
        <Resource
          name="TagOrganizationTeam"
          list={TagOrganizationTeamList}
          edit={TagOrganizationTeamEdit}
          create={TagOrganizationTeamCreate}
          show={TagOrganizationTeamShow}
        />
        <Resource
          name="TagOrganizationVendor"
          list={TagOrganizationVendorList}
          edit={TagOrganizationVendorEdit}
          create={TagOrganizationVendorCreate}
          show={TagOrganizationVendorShow}
        />
        <Resource
          name="TagPayment"
          list={TagPaymentList}
          edit={TagPaymentEdit}
          create={TagPaymentCreate}
          show={TagPaymentShow}
        />
        <Resource
          name="TagProduct"
          list={TagProductList}
          edit={TagProductEdit}
          create={TagProductCreate}
          show={TagProductShow}
        />
        <Resource
          name="TagProposal"
          list={TagProposalList}
          edit={TagProposalEdit}
          create={TagProposalCreate}
          show={TagProposalShow}
        />
        <Resource
          name="TagRequestApproval"
          list={TagRequestApprovalList}
          edit={TagRequestApprovalEdit}
          create={TagRequestApprovalCreate}
          show={TagRequestApprovalShow}
        />
        <Resource
          name="TagTask"
          list={TagTaskList}
          edit={TagTaskEdit}
          create={TagTaskCreate}
          show={TagTaskShow}
        />
        <Resource
          name="TagUser"
          list={TagUserList}
          edit={TagUserEdit}
          create={TagUserCreate}
          show={TagUserShow}
        />
        <Resource
          name="TagWarehouse"
          list={TagWarehouseList}
          edit={TagWarehouseEdit}
          create={TagWarehouseCreate}
          show={TagWarehouseShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="TaskEmployee"
          list={TaskEmployeeList}
          edit={TaskEmployeeEdit}
          create={TaskEmployeeCreate}
          show={TaskEmployeeShow}
        />
        <Resource
          name="TaskLinkedIssue"
          list={TaskLinkedIssueList}
          edit={TaskLinkedIssueEdit}
          create={TaskLinkedIssueCreate}
          show={TaskLinkedIssueShow}
        />
        <Resource
          name="TaskPriority"
          list={TaskPriorityList}
          edit={TaskPriorityEdit}
          create={TaskPriorityCreate}
          show={TaskPriorityShow}
        />
        <Resource
          name="TaskRelatedIssueType"
          list={TaskRelatedIssueTypeList}
          edit={TaskRelatedIssueTypeEdit}
          create={TaskRelatedIssueTypeCreate}
          show={TaskRelatedIssueTypeShow}
        />
        <Resource
          name="TaskSize"
          list={TaskSizeList}
          edit={TaskSizeEdit}
          create={TaskSizeCreate}
          show={TaskSizeShow}
        />
        <Resource
          name="TaskStatus"
          list={TaskStatusList}
          edit={TaskStatusEdit}
          create={TaskStatusCreate}
          show={TaskStatusShow}
        />
        <Resource
          name="TaskTeam"
          list={TaskTeamList}
          edit={TaskTeamEdit}
          create={TaskTeamCreate}
          show={TaskTeamShow}
        />
        <Resource
          name="TaskVersion"
          list={TaskVersionList}
          edit={TaskVersionEdit}
          create={TaskVersionCreate}
          show={TaskVersionShow}
        />
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
        <Resource
          name="TenantSetting"
          list={TenantSettingList}
          edit={TenantSettingEdit}
          create={TenantSettingCreate}
          show={TenantSettingShow}
        />
        <Resource
          name="TimeLog"
          list={TimeLogList}
          edit={TimeLogEdit}
          create={TimeLogCreate}
          show={TimeLogShow}
        />
        <Resource
          name="TimeOffPolicy"
          list={TimeOffPolicyList}
          edit={TimeOffPolicyEdit}
          create={TimeOffPolicyCreate}
          show={TimeOffPolicyShow}
        />
        <Resource
          name="TimeOffPolicyEmployee"
          list={TimeOffPolicyEmployeeList}
          edit={TimeOffPolicyEmployeeEdit}
          create={TimeOffPolicyEmployeeCreate}
          show={TimeOffPolicyEmployeeShow}
        />
        <Resource
          name="TimeOffRequest"
          list={TimeOffRequestList}
          edit={TimeOffRequestEdit}
          create={TimeOffRequestCreate}
          show={TimeOffRequestShow}
        />
        <Resource
          name="TimeOffRequestEmployee"
          list={TimeOffRequestEmployeeList}
          edit={TimeOffRequestEmployeeEdit}
          create={TimeOffRequestEmployeeCreate}
          show={TimeOffRequestEmployeeShow}
        />
        <Resource
          name="TimeSlot"
          list={TimeSlotList}
          edit={TimeSlotEdit}
          create={TimeSlotCreate}
          show={TimeSlotShow}
        />
        <Resource
          name="TimeSlotMinute"
          list={TimeSlotMinuteList}
          edit={TimeSlotMinuteEdit}
          create={TimeSlotMinuteCreate}
          show={TimeSlotMinuteShow}
        />
        <Resource
          name="TimeSlotTimeLog"
          list={TimeSlotTimeLogList}
          edit={TimeSlotTimeLogEdit}
          create={TimeSlotTimeLogCreate}
          show={TimeSlotTimeLogShow}
        />
        <Resource
          name="Timesheet"
          list={TimesheetList}
          edit={TimesheetEdit}
          create={TimesheetCreate}
          show={TimesheetShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserOrganization"
          list={UserOrganizationList}
          edit={UserOrganizationEdit}
          create={UserOrganizationCreate}
          show={UserOrganizationShow}
        />
        <Resource
          name="Warehouse"
          list={WarehouseList}
          edit={WarehouseEdit}
          create={WarehouseCreate}
          show={WarehouseShow}
        />
        <Resource
          name="WarehouseMerchant"
          list={WarehouseMerchantList}
          edit={WarehouseMerchantEdit}
          create={WarehouseMerchantCreate}
          show={WarehouseMerchantShow}
        />
        <Resource
          name="WarehouseProduct"
          list={WarehouseProductList}
          edit={WarehouseProductEdit}
          create={WarehouseProductCreate}
          show={WarehouseProductShow}
        />
        <Resource
          name="WarehouseProductVariant"
          list={WarehouseProductVariantList}
          edit={WarehouseProductVariantEdit}
          create={WarehouseProductVariantCreate}
          show={WarehouseProductVariantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
