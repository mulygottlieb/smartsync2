import { OrganizationTaskSetting as TOrganizationTaskSetting } from "../api/organizationTaskSetting/OrganizationTaskSetting";

export const ORGANIZATIONTASKSETTING_TITLE_FIELD = "tasksProofOfCompletionType";

export const OrganizationTaskSettingTitle = (
  record: TOrganizationTaskSetting
): string => {
  return record.tasksProofOfCompletionType?.toString() || String(record.id);
};
