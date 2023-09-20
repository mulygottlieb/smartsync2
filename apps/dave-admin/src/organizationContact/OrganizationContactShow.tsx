import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ORGANIZATIONCONTACT_TITLE_FIELD } from "./OrganizationContactTitle";
import { EXPENSECATEGORY_TITLE_FIELD } from "../expenseCategory/ExpenseCategoryTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { ORGANIZATIONVENDOR_TITLE_FIELD } from "../organizationVendor/OrganizationVendorTitle";
import { INVITE_TITLE_FIELD } from "../invite/InviteTitle";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TAG_TITLE_FIELD } from "../tag/TagTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";
import { TIMESHEET_TITLE_FIELD } from "../timesheet/TimesheetTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { DEAL_TITLE_FIELD } from "../deal/DealTitle";

export const OrganizationContactShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Primary Email" source="primaryEmail" />
        <TextField label="Primary Phone" source="primaryPhone" />
        <TextField label="Notes" source="notes" />
        <TextField label="Image Url" source="imageUrl" />
        <TextField label="Budget" source="budget" />
        <TextField label="Created By" source="createdBy" />
        <TextField label="Invite Status" source="inviteStatus" />
        <TextField label="Contact Type" source="contactType" />
        <TextField label="Budget Type" source="budgetType" />
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
        <ReferenceField label="Contact" source="contact.id" reference="Contact">
          <TextField source={CONTACT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Deal" source="deal.id" reference="Deal">
          <TextField source={DEAL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Expense"
          target="organizationContactId"
          label="Expenses"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Amount" source="amount" />
            <TextField label="Type Of Expense" source="typeOfExpense" />
            <TextField label="Notes" source="notes" />
            <TextField label="Currency" source="currency" />
            <TextField label="Value Date" source="valueDate" />
            <TextField label="Purpose" source="purpose" />
            <TextField label="Tax Type" source="taxType" />
            <TextField label="Tax Label" source="taxLabel" />
            <TextField label="Rate Value" source="rateValue" />
            <TextField label="Receipt" source="receipt" />
            <BooleanField label="Split Expense" source="splitExpense" />
            <TextField label="Reference" source="reference" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Expense Category"
              source="expensecategory.id"
              reference="ExpenseCategory"
            >
              <TextField source={EXPENSECATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
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
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Vendor"
              source="organizationvendor.id"
              reference="OrganizationVendor"
            >
              <TextField source={ORGANIZATIONVENDOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Income"
          target="clientId"
          label="Incomes"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Amount" source="amount" />
            <TextField label="Currency" source="currency" />
            <TextField label="Value Date" source="valueDate" />
            <TextField label="Notes" source="notes" />
            <BooleanField label="Is Bonus" source="isBonus" />
            <TextField label="Reference" source="reference" />
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
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
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InviteOrganizationContact"
          target="organizationContactId"
          label="InviteOrganizationContacts"
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
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Invoice"
          target="toContactId"
          label="Invoices"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Invoice Date" source="invoiceDate" />
            <TextField label="Invoice Number" source="invoiceNumber" />
            <TextField label="Due Date" source="dueDate" />
            <TextField label="Currency" source="currency" />
            <TextField label="Discount Value" source="discountValue" />
            <BooleanField label="Paid" source="paid" />
            <TextField label="Tax" source="tax" />
            <TextField label="Tax2" source="tax2" />
            <TextField label="Terms" source="terms" />
            <TextField label="Total Value" source="totalValue" />
            <TextField label="Status" source="status" />
            <BooleanField label="Is Estimate" source="isEstimate" />
            <BooleanField label="Is Accepted" source="isAccepted" />
            <TextField label="Discount Type" source="discountType" />
            <TextField label="Tax Type" source="taxType" />
            <TextField label="Tax2 Type" source="tax2Type" />
            <TextField label="Invoice Type" source="invoiceType" />
            <TextField label="Sent To" source="sentTo" />
            <TextField
              label="Organization Contact Id"
              source="organizationContactId"
            />
            <TextField label="Internal Note" source="internalNote" />
            <TextField label="Already Paid" source="alreadyPaid" />
            <TextField label="Amount Due" source="amountDue" />
            <BooleanField
              label="Has Remaining Amount Invoiced"
              source="hasRemainingAmountInvoiced"
            />
            <TextField label="Token" source="token" />
            <BooleanField label="Is Archived" source="isArchived" />
            <ReferenceField
              label="Organization Invoice Organization Id Toorganization"
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
              label="Organization Invoice From Organization Id Toorganization"
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationContactEmployee"
          target="organizationContactId"
          label="OrganizationContactEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OrganizationProject"
          target="organizationContactId"
          label="OrganizationProjects"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Billing" source="billing" />
            <TextField label="Currency" source="currency" />
            <BooleanField label="Public Field" source="publicField" />
            <TextField label="Owner" source="owner" />
            <TextField label="Task List Type" source="taskListType" />
            <TextField label="Code" source="code" />
            <TextField label="Description" source="description" />
            <TextField label="Color" source="color" />
            <BooleanField label="Billable" source="billable" />
            <BooleanField label="Billing Flat" source="billingFlat" />
            <BooleanField label="Open Source" source="openSource" />
            <TextField label="Project Url" source="projectUrl" />
            <TextField
              label="Open Source Project Url"
              source="openSourceProjectUrl"
            />
            <TextField label="Budget" source="budget" />
            <TextField label="Budget Type" source="budgetType" />
            <TextField label="Members Count" source="membersCount" />
            <TextField label="Image Url" source="imageUrl" />
            <ReferenceField
              label="Image Asset"
              source="imageasset.id"
              reference="ImageAsset"
            >
              <TextField source={IMAGEASSET_TITLE_FIELD} />
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
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payment"
          target="organizationContactId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
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
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Payment Date" source="paymentDate" />
            <TextField label="Amount" source="amount" />
            <TextField label="Note" source="note" />
            <TextField label="Currency" source="currency" />
            <BooleanField label="Overdue" source="overdue" />
            <TextField label="Payment Method" source="paymentMethod" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Proposal"
          target="organizationContactId"
          label="Proposals"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Job Post Url" source="jobPostUrl" />
            <TextField label="Value Date" source="valueDate" />
            <TextField label="Job Post Content" source="jobPostContent" />
            <TextField label="Proposal Content" source="proposalContent" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationContact"
          target="organizationContactId"
          label="TagOrganizationContacts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Contact"
              source="organizationcontact.id"
              reference="OrganizationContact"
            >
              <TextField source={ORGANIZATIONCONTACT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TimeLog"
          target="organizationContactId"
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
