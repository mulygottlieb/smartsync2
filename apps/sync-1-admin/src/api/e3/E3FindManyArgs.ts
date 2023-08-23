import { E3WhereInput } from "./E3WhereInput";
import { E3OrderByInput } from "./E3OrderByInput";

export type E3FindManyArgs = {
  where?: E3WhereInput;
  orderBy?: Array<E3OrderByInput>;
  skip?: number;
  take?: number;
};
