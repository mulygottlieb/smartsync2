import { OrganizationVendorWhereInput } from "./OrganizationVendorWhereInput";
import { OrganizationVendorOrderByInput } from "./OrganizationVendorOrderByInput";

export type OrganizationVendorFindManyArgs = {
  where?: OrganizationVendorWhereInput;
  orderBy?: Array<OrganizationVendorOrderByInput>;
  skip?: number;
  take?: number;
};
