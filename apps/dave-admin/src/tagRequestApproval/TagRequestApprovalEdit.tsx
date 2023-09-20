import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TagTitle } from "../tag/TagTitle";
import { RequestApprovalTitle } from "../requestApproval/RequestApprovalTitle";

export const TagRequestApprovalEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="requestApproval.id"
          reference="RequestApproval"
          label="Request Approval"
        >
          <SelectInput optionText={RequestApprovalTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
