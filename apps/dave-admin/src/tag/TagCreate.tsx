import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TagCandidateTitle } from "../tagCandidate/TagCandidateTitle";
import { TagEmployeeTitle } from "../tagEmployee/TagEmployeeTitle";
import { TagEmployeeLevelTitle } from "../tagEmployeeLevel/TagEmployeeLevelTitle";
import { TagEquipmentTitle } from "../tagEquipment/TagEquipmentTitle";
import { TagEventTypeTitle } from "../tagEventType/TagEventTypeTitle";
import { TagExpenseTitle } from "../tagExpense/TagExpenseTitle";
import { TagIncomeTitle } from "../tagIncome/TagIncomeTitle";
import { TagIntegrationTitle } from "../tagIntegration/TagIntegrationTitle";
import { TagInvoiceTitle } from "../tagInvoice/TagInvoiceTitle";
import { TagMerchantTitle } from "../tagMerchant/TagMerchantTitle";
import { TagOrganizationTitle } from "../tagOrganization/TagOrganizationTitle";
import { TagOrganizationContactTitle } from "../tagOrganizationContact/TagOrganizationContactTitle";
import { TagOrganizationDepartmentTitle } from "../tagOrganizationDepartment/TagOrganizationDepartmentTitle";
import { TagOrganizationEmploymentTypeTitle } from "../tagOrganizationEmploymentType/TagOrganizationEmploymentTypeTitle";
import { TagOrganizationExpenseCategoryTitle } from "../tagOrganizationExpenseCategory/TagOrganizationExpenseCategoryTitle";
import { TagOrganizationPositionTitle } from "../tagOrganizationPosition/TagOrganizationPositionTitle";
import { TagOrganizationProjectTitle } from "../tagOrganizationProject/TagOrganizationProjectTitle";
import { TagOrganizationTeamTitle } from "../tagOrganizationTeam/TagOrganizationTeamTitle";
import { TagOrganizationVendorTitle } from "../tagOrganizationVendor/TagOrganizationVendorTitle";
import { TagPaymentTitle } from "../tagPayment/TagPaymentTitle";
import { TagProductTitle } from "../tagProduct/TagProductTitle";
import { TagProposalTitle } from "../tagProposal/TagProposalTitle";
import { TagRequestApprovalTitle } from "../tagRequestApproval/TagRequestApprovalTitle";
import { TagTaskTitle } from "../tagTask/TagTaskTitle";
import { TagUserTitle } from "../tagUser/TagUserTitle";
import { TagWarehouseTitle } from "../tagWarehouse/TagWarehouseTitle";

export const TagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" source="description" />
        <TextInput label="Color" source="color" />
        <BooleanInput label="Is System" source="isSystem" />
        <TextInput label="Icon" source="icon" />
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
        <ReferenceArrayInput
          source="tagCandidate"
          reference="TagCandidate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagCandidateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagEmployee"
          reference="TagEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagEmployeeLevel"
          reference="TagEmployeeLevel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagEmployeeLevelTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagEquipment"
          reference="TagEquipment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagEquipmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagEventType"
          reference="TagEventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagEventTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagExpense"
          reference="TagExpense"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagExpenseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagIncome"
          reference="TagIncome"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagIncomeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagIntegration"
          reference="TagIntegration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagIntegrationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagInvoice"
          reference="TagInvoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagInvoiceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagMerchant"
          reference="TagMerchant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagMerchantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganization"
          reference="TagOrganization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganizationContact"
          reference="TagOrganizationContact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationContactTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganizationDepartment"
          reference="TagOrganizationDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationDepartmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganizationEmploymentType"
          reference="TagOrganizationEmploymentType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationEmploymentTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganizationExpenseCategory"
          reference="TagOrganizationExpenseCategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationExpenseCategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganizationPosition"
          reference="TagOrganizationPosition"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationPositionTitle} />
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
          source="tagOrganizationTeam"
          reference="TagOrganizationTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationTeamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagOrganizationVendor"
          reference="TagOrganizationVendor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagOrganizationVendorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagPayment"
          reference="TagPayment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagPaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagProduct"
          reference="TagProduct"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagProductTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagProposal"
          reference="TagProposal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagProposalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagRequestApproval"
          reference="TagRequestApproval"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagRequestApprovalTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagTask"
          reference="TagTask"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTaskTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagUser"
          reference="TagUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagUserTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagWarehouse"
          reference="TagWarehouse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagWarehouseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
