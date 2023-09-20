import { CandidateDepartmentWhereInput } from "./CandidateDepartmentWhereInput";
import { CandidateDepartmentOrderByInput } from "./CandidateDepartmentOrderByInput";

export type CandidateDepartmentFindManyArgs = {
  where?: CandidateDepartmentWhereInput;
  orderBy?: Array<CandidateDepartmentOrderByInput>;
  skip?: number;
  take?: number;
};
