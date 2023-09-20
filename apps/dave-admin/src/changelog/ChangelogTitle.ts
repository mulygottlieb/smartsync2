import { Changelog as TChangelog } from "../api/changelog/Changelog";

export const CHANGELOG_TITLE_FIELD = "title";

export const ChangelogTitle = (record: TChangelog): string => {
  return record.title?.toString() || String(record.id);
};
