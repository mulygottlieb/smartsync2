import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const IntegrationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Integrations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Img Src" source="imgSrc" />
        <BooleanField label="Is Coming Soon" source="isComingSoon" />
        <BooleanField label="Is Paid" source="isPaid" />
        <TextField label="Version" source="version" />
        <TextField label="Doc Url" source="docUrl" />
        <BooleanField label="Is Free Trial" source="isFreeTrial" />
        <TextField label="Free Trial Period" source="freeTrialPeriod" />
        <TextField label="Order" source="order" />
      </Datagrid>
    </List>
  );
};
