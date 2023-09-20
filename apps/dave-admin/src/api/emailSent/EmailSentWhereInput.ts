import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { EmailTemplateWhereUniqueInput } from "../emailTemplate/EmailTemplateWhereUniqueInput";

export type EmailSentWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringNullableFilter;
  content?: StringNullableFilter;
  email?: StringFilter;
  isArchived?: BooleanNullableFilter;
  tenant?: TenantWhereUniqueInput;
  user?: UserWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  emailTemplate?: EmailTemplateWhereUniqueInput;
};
