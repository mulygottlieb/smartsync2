import { TagOrganizationWhereInput } from "./TagOrganizationWhereInput";
import { TagOrganizationOrderByInput } from "./TagOrganizationOrderByInput";

export type TagOrganizationFindManyArgs = {
  where?: TagOrganizationWhereInput;
  orderBy?: Array<TagOrganizationOrderByInput>;
  skip?: number;
  take?: number;
};
