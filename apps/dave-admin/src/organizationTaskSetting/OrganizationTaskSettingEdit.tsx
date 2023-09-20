import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const OrganizationTaskSettingEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput
          label="Is Tasks Comments Enabled"
          source="isTasksCommentsEnabled"
        />
        <BooleanInput
          label="Is Tasks Privacy Enabled"
          source="isTasksPrivacyEnabled"
        />
        <BooleanInput
          label="Is Tasks Multiple Assignees Enabled"
          source="isTasksMultipleAssigneesEnabled"
        />
        <BooleanInput
          label="Is Tasks Manual Time Enabled"
          source="isTasksManualTimeEnabled"
        />
        <BooleanInput
          label="Is Tasks Group Estimation Enabled"
          source="isTasksGroupEstimationEnabled"
        />
        <BooleanInput
          label="Is Tasks History Enabled"
          source="isTasksHistoryEnabled"
        />
        <BooleanInput
          label="Is Tasks Acceptance Criteria Enabled"
          source="isTasksAcceptanceCriteriaEnabled"
        />
        <BooleanInput
          label="Is Tasks Drafts Enabled"
          source="isTasksDraftsEnabled"
        />
        <BooleanInput
          label="Is Tasks Estimation In Hours Enabled"
          source="isTasksEstimationInHoursEnabled"
        />
        <BooleanInput
          label="Is Tasks Estimation In Story Points Enabled"
          source="isTasksEstimationInStoryPointsEnabled"
        />
        <BooleanInput
          label="Is Tasks Proof Of Completion Enabled"
          source="isTasksProofOfCompletionEnabled"
        />
        <TextInput
          label="Tasks Proof Of Completion Type"
          source="tasksProofOfCompletionType"
        />
        <BooleanInput
          label="Is Tasks Linked Enabled"
          source="isTasksLinkedEnabled"
        />
        <BooleanInput
          label="Is Tasks Notify Left Enabled"
          source="isTasksNotifyLeftEnabled"
        />
        <NumberInput
          step={1}
          label="Tasks Notify Left Period Days"
          source="tasksNotifyLeftPeriodDays"
        />
        <BooleanInput
          label="Is Tasks Auto Close Enabled"
          source="isTasksAutoCloseEnabled"
        />
        <NumberInput
          step={1}
          label="Tasks Auto Close Period Days"
          source="tasksAutoClosePeriodDays"
        />
        <BooleanInput
          label="Is Tasks Auto Archive Enabled"
          source="isTasksAutoArchiveEnabled"
        />
        <NumberInput
          step={1}
          label="Tasks Auto Archive Period Days"
          source="tasksAutoArchivePeriodDays"
        />
        <BooleanInput
          label="Is Tasks Auto Status Enabled"
          source="isTasksAutoStatusEnabled"
        />
        <ReferenceInput
          source="organizationProject.id"
          reference="OrganizationProject"
          label="Organization Project"
        >
          <SelectInput optionText={OrganizationProjectTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationTeam.id"
          reference="OrganizationTeam"
          label="Organization Team"
        >
          <SelectInput optionText={OrganizationTeamTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
