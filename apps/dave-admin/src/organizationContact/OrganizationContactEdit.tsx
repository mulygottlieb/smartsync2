import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { DealTitle } from "../deal/DealTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";
import { IncomeTitle } from "../income/IncomeTitle";
import { InviteOrganizationContactTitle } from "../inviteOrganizationContact/InviteOrganizationContactTitle";
import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { OrganizationContactEmployeeTitle } from "../organizationContactEmployee/OrganizationContactEmployeeTitle";
import { OrganizationProjectTitle } from "../organizationProject/OrganizationProjectTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { ProposalTitle } from "../proposal/ProposalTitle";
import { TagOrganizationContactTitle } from "../tagOrganizationContact/TagOrganizationContactTitle";
import { TimeLogTitle } from "../timeLog/TimeLogTitle";

export const OrganizationContactEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Primary Email" source="primaryEmail" />
        <TextInput label="Primary Phone" source="primaryPhone" />
        <TextInput label="Notes" source="notes" />
        <TextInput label="Image Url" source="imageUrl" />
        <NumberInput step={1} label="Budget" source="budget" />
        <TextInput label="Created By" source="createdBy" />
        <SelectInput
          source="inviteStatus"
          label="Invite Status"
          choices={[
            { label: "NOT_INVITED", value: "NOT_INVITED" },
            { label: "INVITED", value: "INVITED" },
            { label: "ACCEPTED", value: "ACCEPTED" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="contactType"
          label="Contact Type"
          choices={[
            { label: "CLIENT", value: "CLIENT" },
            { label: "CUSTOMER", value: "CUSTOMER" },
            { label: "LEAD", value: "LEAD" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="budgetType"
          label="Budget Type"
          choices={[
            { label: "hours", value: "hours" },
            { label: "cost", value: "cost" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="imageAsset.id"
          reference="ImageAsset"
          label="Image Asset"
        >
          <SelectInput optionText={ImageAssetTitle} />
        </ReferenceInput>
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput source="deal.id" reference="Deal" label="Deal">
          <SelectInput optionText={DealTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="expense"
          reference="Expense"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExpenseTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="income"
          reference="Income"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IncomeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inviteOrganizationContact"
          reference="InviteOrganizationContact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteOrganizationContactTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invoice"
          reference="Invoice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationContactEmployee"
          reference="OrganizationContactEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationContactEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationProject"
          reference="OrganizationProject"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationProjectTitle} />
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
          source="proposal"
          reference="Proposal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProposalTitle} />
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
