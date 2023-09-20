import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { ImageAsset } from "../imageAsset/ImageAsset";
import { TimeOffPolicy } from "../timeOffPolicy/TimeOffPolicy";
import { TimeOffRequestEmployee } from "../timeOffRequestEmployee/TimeOffRequestEmployee";

export type TimeOffRequest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  documentUrl: string | null;
  description: string | null;
  start: Date;
  end: Date;
  requestDate: Date;
  status: string;
  isHoliday: boolean | null;
  isArchived: boolean | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
  imageAsset?: ImageAsset | null;
  timeOffPolicy?: TimeOffPolicy;
  timeOffRequestEmployee?: Array<TimeOffRequestEmployee>;
};
