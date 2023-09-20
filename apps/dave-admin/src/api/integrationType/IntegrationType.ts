import { IntegrationIntegrationType } from "../integrationIntegrationType/IntegrationIntegrationType";

export type IntegrationType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  groupName: string;
  order: number;
  integrationIntegrationType?: Array<IntegrationIntegrationType>;
};
