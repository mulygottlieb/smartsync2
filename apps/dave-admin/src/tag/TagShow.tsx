import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { TAG_TITLE_FIELD } from "./TagTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { EMPLOYEELEVEL_TITLE_FIELD } from "../employeeLevel/EmployeeLevelTitle";
import { EQUIPMENT_TITLE_FIELD } from "../equipment/EquipmentTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { EXPENSE_TITLE_FIELD } from "../expense/ExpenseTitle";
import { INCOME_TITLE_FIELD } from "../income/IncomeTitle";
import { INTEGRATION_TITLE_FIELD } from "../integration/IntegrationTitle";
import { INVOICE_TITLE_FIELD } from "../invoice/InvoiceTitle";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { ORGANIZATIONCONTACT_TITLE_FIELD } from "../organizationContact/OrganizationContactTitle";
import { ORGANIZATIONDEPARTMENT_TITLE_FIELD } from "../organizationDepartment/OrganizationDepartmentTitle";
import { ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD } from "../organizationEmploymentType/OrganizationEmploymentTypeTitle";
import { EXPENSECATEGORY_TITLE_FIELD } from "../expenseCategory/ExpenseCategoryTitle";
import { ORGANIZATIONPOSITION_TITLE_FIELD } from "../organizationPosition/OrganizationPositionTitle";
import { ORGANIZATIONPROJECT_TITLE_FIELD } from "../organizationProject/OrganizationProjectTitle";
import { ORGANIZATIONTEAM_TITLE_FIELD } from "../organizationTeam/OrganizationTeamTitle";
import { ORGANIZATIONVENDOR_TITLE_FIELD } from "../organizationVendor/OrganizationVendorTitle";
import { PAYMENT_TITLE_FIELD } from "../payment/PaymentTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PROPOSAL_TITLE_FIELD } from "../proposal/ProposalTitle";
import { REQUESTAPPROVAL_TITLE_FIELD } from "../requestApproval/RequestApprovalTitle";
import { TASK_TITLE_FIELD } from "../task/TaskTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { WAREHOUSE_TITLE_FIELD } from "../warehouse/WarehouseTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const TagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="TagCandidate"
          target="tagId"
          label="TagCandidates"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagEmployee"
          target="tagId"
          label="TagEmployees"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
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
          reference="TagEmployeeLevel"
          target="tagId"
          label="TagEmployeeLevels"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Employee Level"
              source="employeelevel.id"
              reference="EmployeeLevel"
            >
              <TextField source={EMPLOYEELEVEL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagEquipment"
          target="tagId"
          label="TagEquipments"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Equipment"
              source="equipment.id"
              reference="Equipment"
            >
              <TextField source={EQUIPMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagEventType"
          target="tagId"
          label="TagEventTypes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagExpense"
          target="tagId"
          label="TagExpenses"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Expense"
              source="expense.id"
              reference="Expense"
            >
              <TextField source={EXPENSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagIncome"
          target="tagId"
          label="TagIncomes"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Income"
              source="income.id"
              reference="Income"
            >
              <TextField source={INCOME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagIntegration"
          target="tagId"
          label="TagIntegrations"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Integration"
              source="integration.id"
              reference="Integration"
            >
              <TextField source={INTEGRATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagInvoice"
          target="tagId"
          label="TagInvoices"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Invoice"
              source="invoice.id"
              reference="Invoice"
            >
              <TextField source={INVOICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagMerchant"
          target="tagId"
          label="TagMerchants"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Merchant"
              source="merchant.id"
              reference="Merchant"
            >
              <TextField source={MERCHANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganization"
          target="tagId"
          label="TagOrganizations"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationContact"
          target="tagId"
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
          reference="TagOrganizationDepartment"
          target="tagId"
          label="TagOrganizationDepartments"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Department"
              source="organizationdepartment.id"
              reference="OrganizationDepartment"
            >
              <TextField source={ORGANIZATIONDEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationEmploymentType"
          target="tagId"
          label="TagOrganizationEmploymentTypes"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Employment Type"
              source="organizationemploymenttype.id"
              reference="OrganizationEmploymentType"
            >
              <TextField source={ORGANIZATIONEMPLOYMENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationExpenseCategory"
          target="tagId"
          label="TagOrganizationExpenseCategories"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Expense Category"
              source="expensecategory.id"
              reference="ExpenseCategory"
            >
              <TextField source={EXPENSECATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationPosition"
          target="tagId"
          label="TagOrganizationPositions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Position"
              source="organizationposition.id"
              reference="OrganizationPosition"
            >
              <TextField source={ORGANIZATIONPOSITION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationProject"
          target="tagId"
          label="TagOrganizationProjects"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Organization Project"
              source="organizationproject.id"
              reference="OrganizationProject"
            >
              <TextField source={ORGANIZATIONPROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagOrganizationTeam"
          target="tagId"
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
          reference="TagOrganizationVendor"
          target="tagId"
          label="TagOrganizationVendors"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Organization Vendor"
              source="organizationvendor.id"
              reference="OrganizationVendor"
            >
              <TextField source={ORGANIZATIONVENDOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagPayment"
          target="tagId"
          label="TagPayments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Payment"
              source="payment.id"
              reference="Payment"
            >
              <TextField source={PAYMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagProduct"
          target="tagId"
          label="TagProducts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagProposal"
          target="tagId"
          label="TagProposals"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Proposal"
              source="proposal.id"
              reference="Proposal"
            >
              <TextField source={PROPOSAL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagRequestApproval"
          target="tagId"
          label="TagRequestApprovals"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Request Approval"
              source="requestapproval.id"
              reference="RequestApproval"
            >
              <TextField source={REQUESTAPPROVAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="TagTask" target="tagId" label="TagTasks">
          <Datagrid rowClick="show">
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="TagUser" target="tagId" label="TagUsers">
          <Datagrid rowClick="show">
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TagWarehouse"
          target="tagId"
          label="TagWarehouses"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Warehouse"
              source="warehouse.id"
              reference="Warehouse"
            >
              <TextField source={WAREHOUSE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Tag" source="tag.id" reference="Tag">
              <TextField source={TAG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
