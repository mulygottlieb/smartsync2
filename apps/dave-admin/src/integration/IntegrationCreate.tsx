import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { IntegrationIntegrationTypeTitle } from "../integrationIntegrationType/IntegrationIntegrationTypeTitle";
import { TagIntegrationTitle } from "../tagIntegration/TagIntegrationTitle";

export const IntegrationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Img Src" source="imgSrc" />
        <BooleanInput label="Is Coming Soon" source="isComingSoon" />
        <BooleanInput label="Is Paid" source="isPaid" />
        <TextInput label="Version" source="version" />
        <TextInput label="Doc Url" source="docUrl" />
        <BooleanInput label="Is Free Trial" source="isFreeTrial" />
        <NumberInput label="Free Trial Period" source="freeTrialPeriod" />
        <NumberInput step={1} label="Order" source="order" />
        <ReferenceArrayInput
          source="integrationIntegrationType"
          reference="IntegrationIntegrationType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={IntegrationIntegrationTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tagIntegration"
          reference="TagIntegration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagIntegrationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
