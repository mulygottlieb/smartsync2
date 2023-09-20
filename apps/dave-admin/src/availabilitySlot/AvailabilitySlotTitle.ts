import { AvailabilitySlot as TAvailabilitySlot } from "../api/availabilitySlot/AvailabilitySlot";

export const AVAILABILITYSLOT_TITLE_FIELD = "typeField";

export const AvailabilitySlotTitle = (record: TAvailabilitySlot): string => {
  return record.typeField?.toString() || String(record.id);
};
