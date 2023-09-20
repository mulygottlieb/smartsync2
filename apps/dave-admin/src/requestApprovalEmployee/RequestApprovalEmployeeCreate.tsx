import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { RequestApprovalTitle } from "../requestApproval/RequestApprovalTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";

export const RequestApprovalEmployeeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Status" source="status" />
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="requestApproval.id"
          reference="RequestApproval"
          label="Request Approval"
        >
          <SelectInput optionText={RequestApprovalTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
