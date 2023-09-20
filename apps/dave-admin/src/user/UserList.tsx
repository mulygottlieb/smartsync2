import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { IMAGEASSET_TITLE_FIELD } from "../imageAsset/ImageAssetTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";
import { CANDIDATE_TITLE_FIELD } from "../candidate/CandidateTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Third Party Id" source="thirdPartyId" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Email" source="email" />
        <TextField label="Hash" source="hash" />
        <TextField label="Image Url" source="imageUrl" />
        <TextField label="Preferred Language" source="preferredLanguage" />
        <TextField label="Refresh Token" source="refreshToken" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField
          label="Preferred Component Layout"
          source="preferredComponentLayout"
        />
        <TextField label="Code" source="code" />
        <TextField label="Code Expire At" source="codeExpireAt" />
        <TextField label="Email Verified At" source="emailVerifiedAt" />
        <TextField label="Email Token" source="emailToken" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Time Zone" source="timeZone" />
        <ReferenceField
          label="Image Asset"
          source="imageasset.id"
          reference="ImageAsset"
        >
          <TextField source={IMAGEASSET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Role" source="role.id" reference="Role">
          <TextField source={ROLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Candidate"
          source="candidate.id"
          reference="Candidate"
        >
          <TextField source={CANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
