import { Screenshot as TScreenshot } from "../api/screenshot/Screenshot";

export const SCREENSHOT_TITLE_FIELD = "file";

export const ScreenshotTitle = (record: TScreenshot): string => {
  return record.file?.toString() || String(record.id);
};
