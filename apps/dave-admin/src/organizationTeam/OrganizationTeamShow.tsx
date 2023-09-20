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

import { ORGANIZATIONTEAM_TITLE_FIELD } from "./OrganizationTeamTitle";
import { EQUIPMENTSHARING_TITLE_FIELD } from "../equipmentSharing/EquipmentSharingTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { KEYRESULT_TITLE_FIELD } from "../keyResult/KeyResultTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { INVITE_TITLE_FIELD } from "../invite/InviteTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";
import { REQUESTAPPROVAL_TITLE_FIELD } from "../requestApproval/RequestApprovalTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { TIMESHEET_TITLE_FIELD } from "../timesheet/TimesheetTitle";

export const OrganizationTeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
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
        <ReferenceManyField
          reference="EquipmentSharesTeam"
          target="organizationTeamId"
          label="EquipmentSharesTeams"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Equipment Sharing"
              source="equipmentsharing.id"
              reference="EquipmentSharing"
            >
              <TextField source={EQUIPMENTSHARING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Goal" target="ownerTeamId" label="Goals">
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
          reference="InviteOrganizationTeam"
          target="organizationTeamId"
          label="InviteOrganizationTeams"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Invite"
              source="invite.id"
              reference="Invite"
            >
              <TextField source={INVITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="IssueType"
          target="organizationTeamId"
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
          reference="OrganizationTaskSetting"
          target="organizationTeamId"
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
          reference="OrganizationTeamEmployee"
          target="organizationTeamId"
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
          target="organizationTeamId"
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
          reference="OrganizationTeamTasksTask"
          target="organizationTeamId"
          label="OrganizationTeamTasksTasks"
        >
          <Datagrid rowClick="show">
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
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RequestApprovalTeam"
          target="teamId"
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
          reference="Tag"
          target="organizationTeamId"
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
          reference="TagOrganizationTeam"
          target="organizationTeamId"
          label="TagOrganizationTeams"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Team"
              source="organizationteam.id"
              reference="OrganizationTeam"
            >
              <TextField source={ORGANIZATIONTEAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskPriority"
          target="organizationTeamId"
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
          target="organizationTeamId"
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
          target="organizationTeamId"
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
          target="organizationTeamId"
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
          reference="TaskTeam"
          target="organizationTeamId"
          label="TaskTeams"
        >
          <Datagrid rowClick="show">
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
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TaskVersion"
          target="organizationTeamId"
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
          target="organizationTeamId"
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
      </SimpleShowLayout>
    </Show>
  );
};
