import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { TimeSlot } from "../timeSlot/TimeSlot";

export type Screenshot = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  file: string;
  thumb: string | null;
  recordedAt: Date | null;
  deletedAt: Date | null;
  storageProvider?: "LOCAL" | "S3" | "WASABI" | "CLOUDINARY" | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  timeSlot?: TimeSlot | null;
};
