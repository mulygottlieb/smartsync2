import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { TimeOffPolicyWhereUniqueInput } from "../timeOffPolicy/TimeOffPolicyWhereUniqueInput";
import { TimeOffRequestEmployeeCreateNestedManyWithoutTimeOffRequestsInput } from "./TimeOffRequestEmployeeCreateNestedManyWithoutTimeOffRequestsInput";

export type TimeOffRequestCreateInput = {
  documentUrl?: string | null;
  description?: string | null;
  start: Date;
  end: Date;
  requestDate: Date;
  status: string;
  isHoliday?: boolean | null;
  isArchived?: boolean | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  timeOffPolicy: TimeOffPolicyWhereUniqueInput;
  timeOffRequestEmployee?: TimeOffRequestEmployeeCreateNestedManyWithoutTimeOffRequestsInput;
};
