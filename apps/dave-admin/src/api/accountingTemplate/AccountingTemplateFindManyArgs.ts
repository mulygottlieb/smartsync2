import { AccountingTemplateWhereInput } from "./AccountingTemplateWhereInput";
import { AccountingTemplateOrderByInput } from "./AccountingTemplateOrderByInput";

export type AccountingTemplateFindManyArgs = {
  where?: AccountingTemplateWhereInput;
  orderBy?: Array<AccountingTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
