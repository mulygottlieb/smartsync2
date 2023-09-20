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

import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TimeOffPolicyEmployeeTitle } from "../timeOffPolicyEmployee/TimeOffPolicyEmployeeTitle";
import { TimeOffRequestTitle } from "../timeOffRequest/TimeOffRequestTitle";

export const TimeOffPolicyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <BooleanInput label="Requires Approval" source="requiresApproval" />
        <BooleanInput label="Paid" source="paid" />
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
          source="timeOffPolicyEmployee"
          reference="TimeOffPolicyEmployee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeOffPolicyEmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="timeOffRequest"
          reference="TimeOffRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeOffRequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
