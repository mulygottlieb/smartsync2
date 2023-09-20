import { IntFilter } from "../../util/IntFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringFilter } from "../../util/StringFilter";

export type MigrationWhereInput = {
  id?: IntFilter;
  timestamp?: BigIntFilter;
  name?: StringFilter;
};
