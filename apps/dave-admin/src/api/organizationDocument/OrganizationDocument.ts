import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { ImageAsset } from "../imageAsset/ImageAsset";

export type OrganizationDocument = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  documentUrl: string | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  imageAsset?: ImageAsset | null;
};
