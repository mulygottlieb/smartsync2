import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ImageAssetTitle } from "../imageAsset/ImageAssetTitle";
import { TenantTitle } from "../tenant/TenantTitle";
import { RoleTitle } from "../role/RoleTitle";
import { CandidateTitle } from "../candidate/CandidateTitle";
import { DealTitle } from "../deal/DealTitle";
import { EmailResetTitle } from "../emailReset/EmailResetTitle";
import { EmailSentTitle } from "../emailSent/EmailSentTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { InviteTitle } from "../invite/InviteTitle";
import { InvoiceEstimateHistoryTitle } from "../invoiceEstimateHistory/InvoiceEstimateHistoryTitle";
import { OrganizationTeamTitle } from "../organizationTeam/OrganizationTeamTitle";
import { OrganizationTeamJoinRequestTitle } from "../organizationTeamJoinRequest/OrganizationTeamJoinRequestTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { TagUserTitle } from "../tagUser/TagUserTitle";
import { TaskTitle } from "../task/TaskTitle";
import { TimesheetTitle } from "../timesheet/TimesheetTitle";
import { UserOrganizationTitle } from "../userOrganization/UserOrganizationTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Third Party Id" source="thirdPartyId" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Email" source="email" />
        <TextInput label="Hash" source="hash" />
        <TextInput label="Image Url" source="imageUrl" />
        <TextInput label="Preferred Language" source="preferredLanguage" />
        <TextInput label="Refresh Token" source="refreshToken" />
        <BooleanInput label="Is Active" source="isActive" />
        <SelectInput
          source="preferredComponentLayout"
          label="Preferred Component Layout"
          choices={[
            { label: "CARDS_GRID", value: "CARDS_GRID" },
            { label: "TABLE", value: "TABLE" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="Code" source="code" />
        <DateTimeInput label="Code Expire At" source="codeExpireAt" />
        <DateTimeInput label="Email Verified At" source="emailVerifiedAt" />
        <TextInput label="Email Token" source="emailToken" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <TextInput label="Time Zone" source="timeZone" />
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
        <ReferenceInput source="role.id" reference="Role" label="Role">
          <SelectInput optionText={RoleTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="candidate.id"
          reference="Candidate"
          label="Candidate"
        >
          <SelectInput optionText={CandidateTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="deal"
          reference="Deal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DealTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="emailReset"
          reference="EmailReset"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmailResetTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="emailSent"
          reference="EmailSent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmailSentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="inviteInviteInvitedByIdTouser"
          reference="Invite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inviteInviteUserIdTouser"
          reference="Invite"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InviteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="invoiceEstimateHistory"
          reference="InvoiceEstimateHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InvoiceEstimateHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationTeam"
          reference="OrganizationTeam"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTeamTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="organizationTeamJoinRequest"
          reference="OrganizationTeamJoinRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTeamJoinRequestTitle} />
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
          source="tagUser"
          reference="TagUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagUserTitle} />
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
          source="timesheet"
          reference="Timesheet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimesheetTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userOrganization"
          reference="UserOrganization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserOrganizationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
