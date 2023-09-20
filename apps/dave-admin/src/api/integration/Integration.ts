import { Decimal } from "decimal.js";
import { IntegrationIntegrationType } from "../integrationIntegrationType/IntegrationIntegrationType";
import { TagIntegration } from "../tagIntegration/TagIntegration";

export type Integration = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  imgSrc: string | null;
  isComingSoon: boolean;
  isPaid: boolean;
  version: string | null;
  docUrl: string | null;
  isFreeTrial: boolean;
  freeTrialPeriod: Decimal | null;
  order: number | null;
  integrationIntegrationType?: Array<IntegrationIntegrationType>;
  tagIntegration?: Array<TagIntegration>;
};
