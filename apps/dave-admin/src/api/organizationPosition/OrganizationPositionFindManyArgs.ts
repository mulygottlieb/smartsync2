import { OrganizationPositionWhereInput } from "./OrganizationPositionWhereInput";
import { OrganizationPositionOrderByInput } from "./OrganizationPositionOrderByInput";

export type OrganizationPositionFindManyArgs = {
  where?: OrganizationPositionWhereInput;
  orderBy?: Array<OrganizationPositionOrderByInput>;
  skip?: number;
  take?: number;
};
