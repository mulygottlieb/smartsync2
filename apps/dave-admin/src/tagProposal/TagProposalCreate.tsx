import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProposalTitle } from "../proposal/ProposalTitle";
import { TagTitle } from "../tag/TagTitle";

export const TagProposalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
