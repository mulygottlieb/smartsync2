import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { TIMELOG_TITLE_FIELD } from "../timeLog/TimeLogTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";

export const TimeSlotTimeLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
