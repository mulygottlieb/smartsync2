import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";

export type ScreenshotWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  file?: StringFilter;
  thumb?: StringNullableFilter;
  recordedAt?: DateTimeNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  storageProvider?: "LOCAL" | "S3" | "WASABI" | "CLOUDINARY";
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  timeSlot?: TimeSlotWhereUniqueInput;
};
