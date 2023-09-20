import { Integration } from "../integration/Integration";
import { IntegrationType } from "../integrationType/IntegrationType";

export type IntegrationIntegrationType = {
  integration?: Integration;
  integrationType?: IntegrationType;
  id: string;
};
