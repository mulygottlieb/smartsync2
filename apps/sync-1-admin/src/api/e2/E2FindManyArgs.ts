import { E2WhereInput } from "./E2WhereInput";
import { E2OrderByInput } from "./E2OrderByInput";

export type E2FindManyArgs = {
  where?: E2WhereInput;
  orderBy?: Array<E2OrderByInput>;
  skip?: number;
  take?: number;
};
