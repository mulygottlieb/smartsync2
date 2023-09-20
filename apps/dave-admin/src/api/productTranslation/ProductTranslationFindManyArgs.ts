import { ProductTranslationWhereInput } from "./ProductTranslationWhereInput";
import { ProductTranslationOrderByInput } from "./ProductTranslationOrderByInput";

export type ProductTranslationFindManyArgs = {
  where?: ProductTranslationWhereInput;
  orderBy?: Array<ProductTranslationOrderByInput>;
  skip?: number;
  take?: number;
};
