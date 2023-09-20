import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { ActivityCreateNestedManyWithoutOrganizationProjectsInput } from "./ActivityCreateNestedManyWithoutOrganizationProjectsInput";
import { ExpenseCreateNestedManyWithoutOrganizationProjectsInput } from "./ExpenseCreateNestedManyWithoutOrganizationProjectsInput";
import { InviteOrganizationProjectCreateNestedManyWithoutOrganizationProjectsInput } from "./InviteOrganizationProjectCreateNestedManyWithoutOrganizationProjectsInput";
import { InvoiceItemCreateNestedManyWithoutOrganizationProjectsInput } from "./InvoiceItemCreateNestedManyWithoutOrganizationProjectsInput";
import { IssueTypeCreateNestedManyWithoutOrganizationProjectsInput } from "./IssueTypeCreateNestedManyWithoutOrganizationProjectsInput";
import { KeyResultCreateNestedManyWithoutOrganizationProjectsInput } from "./KeyResultCreateNestedManyWithoutOrganizationProjectsInput";
import { OrganizationProjectEmployeeCreateNestedManyWithoutOrganizationProjectsInput } from "./OrganizationProjectEmployeeCreateNestedManyWithoutOrganizationProjectsInput";
import { OrganizationSprintCreateNestedManyWithoutOrganizationProjectsInput } from "./OrganizationSprintCreateNestedManyWithoutOrganizationProjectsInput";
import { OrganizationTaskSettingCreateNestedManyWithoutOrganizationProjectsInput } from "./OrganizationTaskSettingCreateNestedManyWithoutOrganizationProjectsInput";
import { PaymentCreateNestedManyWithoutOrganizationProjectsInput } from "./PaymentCreateNestedManyWithoutOrganizationProjectsInput";
import { TagOrganizationProjectCreateNestedManyWithoutOrganizationProjectsInput } from "./TagOrganizationProjectCreateNestedManyWithoutOrganizationProjectsInput";
import { TaskCreateNestedManyWithoutOrganizationProjectsInput } from "./TaskCreateNestedManyWithoutOrganizationProjectsInput";
import { TaskPriorityCreateNestedManyWithoutOrganizationProjectsInput } from "./TaskPriorityCreateNestedManyWithoutOrganizationProjectsInput";
import { TaskRelatedIssueTypeCreateNestedManyWithoutOrganizationProjectsInput } from "./TaskRelatedIssueTypeCreateNestedManyWithoutOrganizationProjectsInput";
import { TaskSizeCreateNestedManyWithoutOrganizationProjectsInput } from "./TaskSizeCreateNestedManyWithoutOrganizationProjectsInput";
import { TaskStatusCreateNestedManyWithoutOrganizationProjectsInput } from "./TaskStatusCreateNestedManyWithoutOrganizationProjectsInput";
import { TaskVersionCreateNestedManyWithoutOrganizationProjectsInput } from "./TaskVersionCreateNestedManyWithoutOrganizationProjectsInput";
import { TimeLogCreateNestedManyWithoutOrganizationProjectsInput } from "./TimeLogCreateNestedManyWithoutOrganizationProjectsInput";

export type OrganizationProjectCreateInput = {
  name: string;
  startDate?: Date | null;
  endDate?: Date | null;
  billing?: string | null;
  currency?: string | null;
  publicField?: boolean | null;
  owner?: string | null;
  taskListType: string;
  code?: string | null;
  description?: string | null;
  color?: string | null;
  billable?: boolean | null;
  billingFlat?: boolean | null;
  openSource?: boolean | null;
  projectUrl?: string | null;
  openSourceProjectUrl?: string | null;
  budget?: number | null;
  budgetType?: string | null;
  membersCount?: number | null;
  imageUrl?: string | null;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  organizationContact?: OrganizationContactWhereUniqueInput | null;
  activity?: ActivityCreateNestedManyWithoutOrganizationProjectsInput;
  expense?: ExpenseCreateNestedManyWithoutOrganizationProjectsInput;
  inviteOrganizationProject?: InviteOrganizationProjectCreateNestedManyWithoutOrganizationProjectsInput;
  invoiceItem?: InvoiceItemCreateNestedManyWithoutOrganizationProjectsInput;
  issueType?: IssueTypeCreateNestedManyWithoutOrganizationProjectsInput;
  keyResult?: KeyResultCreateNestedManyWithoutOrganizationProjectsInput;
  organizationProjectEmployee?: OrganizationProjectEmployeeCreateNestedManyWithoutOrganizationProjectsInput;
  organizationSprint?: OrganizationSprintCreateNestedManyWithoutOrganizationProjectsInput;
  organizationTaskSetting?: OrganizationTaskSettingCreateNestedManyWithoutOrganizationProjectsInput;
  payment?: PaymentCreateNestedManyWithoutOrganizationProjectsInput;
  tagOrganizationProject?: TagOrganizationProjectCreateNestedManyWithoutOrganizationProjectsInput;
  task?: TaskCreateNestedManyWithoutOrganizationProjectsInput;
  taskPriority?: TaskPriorityCreateNestedManyWithoutOrganizationProjectsInput;
  taskRelatedIssueType?: TaskRelatedIssueTypeCreateNestedManyWithoutOrganizationProjectsInput;
  taskSize?: TaskSizeCreateNestedManyWithoutOrganizationProjectsInput;
  taskStatus?: TaskStatusCreateNestedManyWithoutOrganizationProjectsInput;
  taskVersion?: TaskVersionCreateNestedManyWithoutOrganizationProjectsInput;
  timeLog?: TimeLogCreateNestedManyWithoutOrganizationProjectsInput;
};