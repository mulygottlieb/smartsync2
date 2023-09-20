/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { ProductTypeWhereUniqueInput } from "../../productType/base/ProductTypeWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../../imageAsset/base/ImageAssetWhereUniqueInput";
import { ProductCategoryWhereUniqueInput } from "../../productCategory/base/ProductCategoryWhereUniqueInput";
import { InvoiceItemListRelationFilter } from "../../invoiceItem/base/InvoiceItemListRelationFilter";
import { ProductGalleryItemListRelationFilter } from "../../productGalleryItem/base/ProductGalleryItemListRelationFilter";
import { ProductOptionGroupListRelationFilter } from "../../productOptionGroup/base/ProductOptionGroupListRelationFilter";
import { ProductTranslationListRelationFilter } from "../../productTranslation/base/ProductTranslationListRelationFilter";
import { ProductVariantListRelationFilter } from "../../productVariant/base/ProductVariantListRelationFilter";
import { TagProductListRelationFilter } from "../../tagProduct/base/TagProductListRelationFilter";
import { WarehouseProductListRelationFilter } from "../../warehouseProduct/base/WarehouseProductListRelationFilter";

@InputType()
class ProductWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  enabled?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  code?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  imageUrl?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenant?: TenantWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProductTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductTypeWhereUniqueInput, {
    nullable: true,
  })
  productType?: ProductTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ImageAssetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageAssetWhereUniqueInput)
  @IsOptional()
  @Field(() => ImageAssetWhereUniqueInput, {
    nullable: true,
  })
  imageAsset?: ImageAssetWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProductCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductCategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductCategoryWhereUniqueInput, {
    nullable: true,
  })
  productCategory?: ProductCategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InvoiceItemListRelationFilter)
  @IsOptional()
  @Field(() => InvoiceItemListRelationFilter, {
    nullable: true,
  })
  invoiceItem?: InvoiceItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductGalleryItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductGalleryItemListRelationFilter)
  @IsOptional()
  @Field(() => ProductGalleryItemListRelationFilter, {
    nullable: true,
  })
  productGalleryItem?: ProductGalleryItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductOptionGroupListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductOptionGroupListRelationFilter)
  @IsOptional()
  @Field(() => ProductOptionGroupListRelationFilter, {
    nullable: true,
  })
  productOptionGroup?: ProductOptionGroupListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductTranslationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductTranslationListRelationFilter)
  @IsOptional()
  @Field(() => ProductTranslationListRelationFilter, {
    nullable: true,
  })
  productTranslation?: ProductTranslationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductVariantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductVariantListRelationFilter)
  @IsOptional()
  @Field(() => ProductVariantListRelationFilter, {
    nullable: true,
  })
  productVariant?: ProductVariantListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TagProductListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TagProductListRelationFilter)
  @IsOptional()
  @Field(() => TagProductListRelationFilter, {
    nullable: true,
  })
  tagProduct?: TagProductListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WarehouseProductListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WarehouseProductListRelationFilter)
  @IsOptional()
  @Field(() => WarehouseProductListRelationFilter, {
    nullable: true,
  })
  warehouseProduct?: WarehouseProductListRelationFilter;
}

export { ProductWhereInput as ProductWhereInput };