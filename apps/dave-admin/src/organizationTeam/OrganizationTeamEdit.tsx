import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EquipmentSharesTeamTitle } from "../equipmentSharesTeam/EquipmentSharesTeamTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { UserTitle } from "../user/UserTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { GoalTitle } from "../goal/GoalTitle";
import { InviteOrganizationTeamTitle } from "../inviteOrganizationTeam/InviteOrganizationTeamTitle";
import { IssueTypeTitle } from "../issueType/IssueTypeTitle";
import { OrganizationTaskSettingTitle } from "../organizationTaskSetting/OrganizationTaskSettingTitle";
import { OrganizationTeamEmployeeTitle } from "../organizationTeamEmployee/OrganizationTeamEmployeeTitle";
import { OrganizationTeamJoinRequestTitle } from "../organizationTeamJoinRequest/OrganizationTeamJoinRequestTitle";
import { OrganizationTeamTasksTaskTitle } from "../organizationTeamTasksTask/OrganizationTeamTasksTaskTitle";
import { RequestApprovalTeamTitle } from "../requestApprovalTeam/RequestApprovalTeamTitle";
import { TagTitle } from "../tag/TagTitle";
import { TagOrganizationTeamTitle } from "../tagOrganizationTeam/TagOrganizationTeamTitle";
import { TaskPriorityTitle } from "../taskPriority/TaskPriorityTitle";
import { TaskRelatedIssueTypeTitle } from "../taskRelatedIssueType/TaskRelatedIssueTypeTitle";
import { TaskSizeTitle } from "../taskSize/TaskSizeTitle";
import { TaskStatusTitle } from "../taskStatus/TaskStatusTitle";
import { TaskTeamTitle } from "../taskTeam/TaskTeamTitle";
import { TaskVersionTitle } from "../taskVersion/TaskVersionTitle";
import { TimeLogTitle } from "../timeLog/TimeLogTitle";

export const OrganizationTeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Prefix" source="prefix" />
        <BooleanInput label="Public Field" source="publicField" />
        <TextInput label="Profile Link" source="profileLink" />
        <ReferenceArrayInput
          source="equipmentSharesTeams"
          reference="EquipmentSharesTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EquipmentSharesTeamTitle} />
        </ReferenceArrayInput>
        <TextInput label="Logo" source="logo" />
        <TextInput label="Color" source="color" />
        <TextInput label="Emoji" source="emoji" />
        <TextInput label="Team Size" source="teamSize" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="imageAsset.id"
          reference="ImageAsset"
          label="Image Asset"
        >
          <SelectInput optionText={ImageAssetTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="goal"
          reference="Goal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inviteOrganizationTeam"
          reference="InviteOrganizationTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteOrganizationTeamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="issueType"
          reference="IssueType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IssueTypeTitle} />
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
          source="organizationTeamTasksTask"
          reference="OrganizationTeamTasksTask"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTeamTasksTaskTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="requestApprovalTeam"
          reference="RequestApprovalTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RequestApprovalTeamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tag"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganizationTeam"
          reference="TagOrganizationTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationTeamTitle} />
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
          source="taskTeam"
          reference="TaskTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskTeamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="taskVersion"
          reference="TaskVersion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskVersionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeLog"
          reference="TimeLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeLogTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
