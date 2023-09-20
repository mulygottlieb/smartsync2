import { TagMerchantWhereInput } from "./TagMerchantWhereInput";
import { TagMerchantOrderByInput } from "./TagMerchantOrderByInput";

export type TagMerchantFindManyArgs = {
  where?: TagMerchantWhereInput;
  orderBy?: Array<TagMerchantOrderByInput>;
  skip?: number;
  take?: number;
};
