import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationUpdateManyWithoutContactsInput } from "./OrganizationUpdateManyWithoutContactsInput";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { MerchantWhereUniqueInput } from "../merchant/MerchantWhereUniqueInput";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type ContactUpdateInput = {
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  country?: string | null;
  city?: string | null;
  address?: string | null;
  address2?: string | null;
  postcode?: string | null;
  regionCode?: string | null;
  fax?: string | null;
  fiscalInformation?: string | null;
  website?: string | null;
  latitude?: Decimal | null;
  longitude?: Decimal | null;
  tenant?: TenantWhereUniqueInput | null;
  organizationContactOrganizationIdToorganization?: OrganizationWhereUniqueInput | null;
  organizationOrganizationContactIdTocontact?: OrganizationUpdateManyWithoutContactsInput;
  candidate?: CandidateWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
  merchant?: MerchantWhereUniqueInput | null;
  organizationContact?: OrganizationContactWhereUniqueInput | null;
  warehouse?: WarehouseWhereUniqueInput | null;
};