import { ProductOptionTranslationWhereInput } from "./ProductOptionTranslationWhereInput";
import { ProductOptionTranslationOrderByInput } from "./ProductOptionTranslationOrderByInput";

export type ProductOptionTranslationFindManyArgs = {
  where?: ProductOptionTranslationWhereInput;
  orderBy?: Array<ProductOptionTranslationOrderByInput>;
  skip?: number;
  take?: number;
};
