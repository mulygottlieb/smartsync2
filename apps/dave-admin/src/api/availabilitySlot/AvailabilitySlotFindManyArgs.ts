import { AvailabilitySlotWhereInput } from "./AvailabilitySlotWhereInput";
import { AvailabilitySlotOrderByInput } from "./AvailabilitySlotOrderByInput";

export type AvailabilitySlotFindManyArgs = {
  where?: AvailabilitySlotWhereInput;
  orderBy?: Array<AvailabilitySlotOrderByInput>;
  skip?: number;
  take?: number;
};
