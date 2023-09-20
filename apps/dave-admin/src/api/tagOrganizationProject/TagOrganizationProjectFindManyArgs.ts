import { TagOrganizationProjectWhereInput } from "./TagOrganizationProjectWhereInput";
import { TagOrganizationProjectOrderByInput } from "./TagOrganizationProjectOrderByInput";

export type TagOrganizationProjectFindManyArgs = {
  where?: TagOrganizationProjectWhereInput;
  orderBy?: Array<TagOrganizationProjectOrderByInput>;
  skip?: number;
  take?: number;
};
