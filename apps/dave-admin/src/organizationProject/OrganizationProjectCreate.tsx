import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { OrganizationContactTitle } from "../organizationContact/OrganizationContactTitle";
import { ActivityTitle } from "../activity/ActivityTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";
import { InviteOrganizationProjectTitle } from "../inviteOrganizationProject/InviteOrganizationProjectTitle";
import { InvoiceItemTitle } from "../invoiceItem/InvoiceItemTitle";
import { IssueTypeTitle } from "../issueType/IssueTypeTitle";
import { KeyResultTitle } from "../keyResult/KeyResultTitle";
import { OrganizationProjectEmployeeTitle } from "../organizationProjectEmployee/OrganizationProjectEmployeeTitle";
import { OrganizationSprintTitle } from "../organizationSprint/OrganizationSprintTitle";
import { OrganizationTaskSettingTitle } from "../organizationTaskSetting/OrganizationTaskSettingTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { TagOrganizationProjectTitle } from "../tagOrganizationProject/TagOrganizationProjectTitle";
import { TaskTitle } from "../task/TaskTitle";
import { TaskPriorityTitle } from "../taskPriority/TaskPriorityTitle";
import { TaskRelatedIssueTypeTitle } from "../taskRelatedIssueType/TaskRelatedIssueTypeTitle";
import { TaskSizeTitle } from "../taskSize/TaskSizeTitle";
import { TaskStatusTitle } from "../taskStatus/TaskStatusTitle";
import { TaskVersionTitle } from "../taskVersion/TaskVersionTitle";
import { TimeLogTitle } from "../timeLog/TimeLogTitle";

export const OrganizationProjectCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Start Date" source="startDate" />
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Billing" source="billing" />
        <TextInput label="Currency" source="currency" />
        <BooleanInput label="Public Field" source="publicField" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="Task List Type" source="taskListType" />
        <TextInput label="Code" source="code" />
        <TextInput label="Description" source="description" />
        <TextInput label="Color" source="color" />
        <BooleanInput label="Billable" source="billable" />
        <BooleanInput label="Billing Flat" source="billingFlat" />
        <BooleanInput label="Open Source" source="openSource" />
        <TextInput label="Project Url" source="projectUrl" />
        <TextInput
          label="Open Source Project Url"
          source="openSourceProjectUrl"
        />
        <NumberInput step={1} label="Budget" source="budget" />
        <TextInput label="Budget Type" source="budgetType" />
        <NumberInput step={1} label="Members Count" source="membersCount" />
        <TextInput label="Image Url" source="imageUrl" />
        <ReferenceInput
          source="imageAsset.id"
          reference="ImageAsset"
          label="Image Asset"
        >
          <SelectInput optionText={ImageAssetTitle} />
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
        <ReferenceInput
          source="organizationContact.id"
          reference="OrganizationContact"
          label="Organization Contact"
        >
          <SelectInput optionText={OrganizationContactTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="activity"
          reference="Activity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ActivityTitle} />
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
          source="inviteOrganizationProject"
          reference="InviteOrganizationProject"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteOrganizationProjectTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invoiceItem"
          reference="InvoiceItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceItemTitle} />
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
          source="keyResult"
          reference="KeyResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeyResultTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationProjectEmployee"
          reference="OrganizationProjectEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationProjectEmployeeTitle} />
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
          source="payment"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganizationProject"
          reference="TagOrganizationProject"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationProjectTitle} />
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
        <ReferenceArrayInput
          source="timeLog"
          reference="TimeLog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeLogTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
