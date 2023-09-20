import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeLogTitle } from "../timeLog/TimeLogTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";

export const TimeSlotTimeLogCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="timeLog.id"
          reference="TimeLog"
          label="Time Log"
        >
          <SelectInput optionText={TimeLogTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="timeSlot.id"
          reference="TimeSlot"
          label="Time Slot"
        >
          <SelectInput optionText={TimeSlotTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
