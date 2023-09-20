import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type CandidateDocumentUpdateInput = {
  name?: string;
  documentUrl?: string | null;
  candidate?: CandidateWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
