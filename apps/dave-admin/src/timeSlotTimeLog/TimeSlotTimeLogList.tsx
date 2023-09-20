import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TIMELOG_TITLE_FIELD } from "../timeLog/TimeLogTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";

export const TimeSlotTimeLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TimeSlotTimeLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Time Log"
          source="timelog.id"
          reference="TimeLog"
        >
          <TextField source={TIMELOG_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Time Slot"
          source="timeslot.id"
          reference="TimeSlot"
        >
          <TextField source={TIMESLOT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
