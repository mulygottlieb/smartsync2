import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { TimeSlotWhereUniqueInput } from "../timeSlot/TimeSlotWhereUniqueInput";

export type ScreenshotUpdateInput = {
  file?: string;
  thumb?: string | null;
  recordedAt?: Date | null;
  deletedAt?: Date | null;
  storageProvider?: "LOCAL" | "S3" | "WASABI" | "CLOUDINARY" | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  timeSlot?: TimeSlotWhereUniqueInput | null;
};
