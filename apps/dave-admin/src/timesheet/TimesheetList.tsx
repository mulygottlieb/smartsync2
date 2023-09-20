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
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";

export const TimesheetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Timesheets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Duration" source="duration" />
        <TextField label="Keyboard" source="keyboard" />
        <TextField label="Mouse" source="mouse" />
        <TextField label="Overall" source="overall" />
        <TextField label="Started At" source="startedAt" />
        <TextField label="Stopped At" source="stoppedAt" />
        <TextField label="Approved At" source="approvedAt" />
        <TextField label="Submitted At" source="submittedAt" />
        <TextField label="Locked At" source="lockedAt" />
        <BooleanField label="Is Billed" source="isBilled" />
        <TextField label="Status" source="status" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
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
          label="Organization"
          source="organization.id"
          reference="Organization"
        >
          <TextField source={ORGANIZATION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
