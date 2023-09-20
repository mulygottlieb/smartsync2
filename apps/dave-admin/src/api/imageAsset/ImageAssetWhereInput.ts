import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";
import { TenantListRelationFilter } from "../tenant/TenantListRelationFilter";
import { EquipmentListRelationFilter } from "../equipment/EquipmentListRelationFilter";
import { IssueTypeListRelationFilter } from "../issueType/IssueTypeListRelationFilter";
import { MerchantListRelationFilter } from "../merchant/MerchantListRelationFilter";
import { OrganizationContactListRelationFilter } from "../organizationContact/OrganizationContactListRelationFilter";
import { OrganizationDocumentListRelationFilter } from "../organizationDocument/OrganizationDocumentListRelationFilter";
import { OrganizationProjectListRelationFilter } from "../organizationProject/OrganizationProjectListRelationFilter";
import { OrganizationTeamListRelationFilter } from "../organizationTeam/OrganizationTeamListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { ProductCategoryListRelationFilter } from "../productCategory/ProductCategoryListRelationFilter";
import { ProductGalleryItemListRelationFilter } from "../productGalleryItem/ProductGalleryItemListRelationFilter";
import { ProductVariantListRelationFilter } from "../productVariant/ProductVariantListRelationFilter";
import { TimeOffRequestListRelationFilter } from "../timeOffRequest/TimeOffRequestListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { WarehouseListRelationFilter } from "../warehouse/WarehouseListRelationFilter";

export type ImageAssetWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringNullableFilter;
  url?: StringFilter;
  width?: IntFilter;
  height?: IntFilter;
  isFeatured?: BooleanFilter;
  thumb?: StringNullableFilter;
  size?: DecimalNullableFilter;
  externalProviderId?: StringNullableFilter;
  storageProvider?: "LOCAL" | "S3" | "WASABI" | "CLOUDINARY";
  deletedAt?: DateTimeNullableFilter;
  tenantImageAssetTenantIdTotenant?: TenantWhereUniqueInput;
  organizationImageAssetOrganizationIdToorganization?: OrganizationWhereUniqueInput;
  organizationOrganizationImageIdToimageAsset?: OrganizationListRelationFilter;
  tenantTenantImageIdToimageAsset?: TenantListRelationFilter;
  equipment?: EquipmentListRelationFilter;
  issueType?: IssueTypeListRelationFilter;
  merchant?: MerchantListRelationFilter;
  organizationContact?: OrganizationContactListRelationFilter;
  organizationDocument?: OrganizationDocumentListRelationFilter;
  organizationProject?: OrganizationProjectListRelationFilter;
  organizationTeam?: OrganizationTeamListRelationFilter;
  product?: ProductListRelationFilter;
  productCategory?: ProductCategoryListRelationFilter;
  productGalleryItem?: ProductGalleryItemListRelationFilter;
  productVariant?: ProductVariantListRelationFilter;
  timeOffRequest?: TimeOffRequestListRelationFilter;
  user?: UserListRelationFilter;
  warehouse?: WarehouseListRelationFilter;
};
