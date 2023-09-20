import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TimeLogTitle } from "../timeLog/TimeLogTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";

export const TimeSlotTimeLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
