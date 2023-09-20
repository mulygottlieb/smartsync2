import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";

import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const OrganizationTaskSettingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
