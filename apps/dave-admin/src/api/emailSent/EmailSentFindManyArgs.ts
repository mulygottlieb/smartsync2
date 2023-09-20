import { EmailSentWhereInput } from "./EmailSentWhereInput";
import { EmailSentOrderByInput } from "./EmailSentOrderByInput";

export type EmailSentFindManyArgs = {
  where?: EmailSentWhereInput;
  orderBy?: Array<EmailSentOrderByInput>;
  skip?: number;
  take?: number;
};
