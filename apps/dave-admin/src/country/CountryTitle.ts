import { Country as TCountry } from "../api/country/Country";

export const COUNTRY_TITLE_FIELD = "isoCode";

export const CountryTitle = (record: TCountry): string => {
  return record.isoCode?.toString() || String(record.id);
};
