/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ImageAsset,
  Organization,
  Tenant,
  Equipment,
  IssueType,
  Merchant,
  OrganizationContact,
  OrganizationDocument,
  OrganizationProject,
  OrganizationTeam,
  Product,
  ProductCategory,
  ProductGalleryItem,
  ProductVariant,
  TimeOffRequest,
  User,
  Warehouse,
} from "@prisma/client";

export class ImageAssetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ImageAssetCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageAssetCountArgs>
  ): Promise<number> {
    return this.prisma.imageAsset.count(args);
  }

  async findMany<T extends Prisma.ImageAssetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageAssetFindManyArgs>
  ): Promise<ImageAsset[]> {
    return this.prisma.imageAsset.findMany(args);
  }
  async findOne<T extends Prisma.ImageAssetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageAssetFindUniqueArgs>
  ): Promise<ImageAsset | null> {
    return this.prisma.imageAsset.findUnique(args);
  }
  async create<T extends Prisma.ImageAssetCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageAssetCreateArgs>
  ): Promise<ImageAsset> {
    return this.prisma.imageAsset.create<T>(args);
  }
  async update<T extends Prisma.ImageAssetUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageAssetUpdateArgs>
  ): Promise<ImageAsset> {
    return this.prisma.imageAsset.update<T>(args);
  }
  async delete<T extends Prisma.ImageAssetDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ImageAssetDeleteArgs>
  ): Promise<ImageAsset> {
    return this.prisma.imageAsset.delete(args);
  }

  async findOrganizationOrganizationImageIdToimageAsset(
    parentId: string,
    args: Prisma.OrganizationFindManyArgs
  ): Promise<Organization[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizationOrganizationImageIdToimageAsset(args);
  }

  async findTenantTenantImageIdToimageAsset(
    parentId: string,
    args: Prisma.TenantFindManyArgs
  ): Promise<Tenant[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .tenantTenantImageIdToimageAsset(args);
  }

  async findEquipment(
    parentId: string,
    args: Prisma.EquipmentFindManyArgs
  ): Promise<Equipment[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .equipment(args);
  }

  async findIssueType(
    parentId: string,
    args: Prisma.IssueTypeFindManyArgs
  ): Promise<IssueType[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .issueType(args);
  }

  async findMerchant(
    parentId: string,
    args: Prisma.MerchantFindManyArgs
  ): Promise<Merchant[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .merchant(args);
  }

  async findOrganizationContact(
    parentId: string,
    args: Prisma.OrganizationContactFindManyArgs
  ): Promise<OrganizationContact[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizationContact(args);
  }

  async findOrganizationDocument(
    parentId: string,
    args: Prisma.OrganizationDocumentFindManyArgs
  ): Promise<OrganizationDocument[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizationDocument(args);
  }

  async findOrganizationProject(
    parentId: string,
    args: Prisma.OrganizationProjectFindManyArgs
  ): Promise<OrganizationProject[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizationProject(args);
  }

  async findOrganizationTeam(
    parentId: string,
    args: Prisma.OrganizationTeamFindManyArgs
  ): Promise<OrganizationTeam[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .organizationTeam(args);
  }

  async findProduct(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .product(args);
  }

  async findProductCategory(
    parentId: string,
    args: Prisma.ProductCategoryFindManyArgs
  ): Promise<ProductCategory[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productCategory(args);
  }

  async findProductGalleryItem(
    parentId: string,
    args: Prisma.ProductGalleryItemFindManyArgs
  ): Promise<ProductGalleryItem[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productGalleryItem(args);
  }

  async findProductVariant(
    parentId: string,
    args: Prisma.ProductVariantFindManyArgs
  ): Promise<ProductVariant[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .productVariant(args);
  }

  async findTimeOffRequest(
    parentId: string,
    args: Prisma.TimeOffRequestFindManyArgs
  ): Promise<TimeOffRequest[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .timeOffRequest(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }

  async findWarehouse(
    parentId: string,
    args: Prisma.WarehouseFindManyArgs
  ): Promise<Warehouse[]> {
    return this.prisma.imageAsset
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .warehouse(args);
  }

  async getTenantImageAssetTenantIdTotenant(
    parentId: string
  ): Promise<Tenant | null> {
    return this.prisma.imageAsset
      .findUnique({
        where: { id: parentId },
      })
      .tenantImageAssetTenantIdTotenant();
  }

  async getOrganizationImageAssetOrganizationIdToorganization(
    parentId: string
  ): Promise<Organization | null> {
    return this.prisma.imageAsset
      .findUnique({
        where: { id: parentId },
      })
      .organizationImageAssetOrganizationIdToorganization();
  }
}
