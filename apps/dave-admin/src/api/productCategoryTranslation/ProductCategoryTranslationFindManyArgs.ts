import { ProductCategoryTranslationWhereInput } from "./ProductCategoryTranslationWhereInput";
import { ProductCategoryTranslationOrderByInput } from "./ProductCategoryTranslationOrderByInput";

export type ProductCategoryTranslationFindManyArgs = {
  where?: ProductCategoryTranslationWhereInput;
  orderBy?: Array<ProductCategoryTranslationOrderByInput>;
  skip?: number;
  take?: number;
};
