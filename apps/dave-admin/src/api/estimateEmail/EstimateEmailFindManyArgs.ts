import { EstimateEmailWhereInput } from "./EstimateEmailWhereInput";
import { EstimateEmailOrderByInput } from "./EstimateEmailOrderByInput";

export type EstimateEmailFindManyArgs = {
  where?: EstimateEmailWhereInput;
  orderBy?: Array<EstimateEmailOrderByInput>;
  skip?: number;
  take?: number;
};
