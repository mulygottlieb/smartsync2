import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { DealListRelationFilter } from "../deal/DealListRelationFilter";

export type PipelineStageWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  description?: StringNullableFilter;
  index?: IntFilter;
  name?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  pipeline?: PipelineWhereUniqueInput;
  deal?: DealListRelationFilter;
};
