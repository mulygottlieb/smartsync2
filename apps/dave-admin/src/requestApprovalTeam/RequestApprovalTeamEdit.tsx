import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RequestApprovalTitle } from "../requestApproval/RequestApprovalTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";

export const RequestApprovalTeamEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Status" source="status" />
        <ReferenceInput
          source="requestApproval.id"
          reference="RequestApproval"
          label="Request Approval"
        >
          <SelectInput optionText={RequestApprovalTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="Organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="organizationTeam.id"
          reference="OrganizationTeam"
          label="Organization Team"
        >
          <SelectInput optionText={OrganizationTeamTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
