import { ProductOptionGroupWhereInput } from "./ProductOptionGroupWhereInput";
import { ProductOptionGroupOrderByInput } from "./ProductOptionGroupOrderByInput";

export type ProductOptionGroupFindManyArgs = {
  where?: ProductOptionGroupWhereInput;
  orderBy?: Array<ProductOptionGroupOrderByInput>;
  skip?: number;
  take?: number;
};
