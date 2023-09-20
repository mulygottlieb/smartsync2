import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProposalTitle } from "../proposal/ProposalTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagProposalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="proposal.id"
          reference="Proposal"
          label="Proposal"
        >
          <SelectInput optionText={ProposalTitle} />
        </ReferenceInput>
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
