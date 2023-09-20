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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../../imageAsset/base/ImageAssetWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TagWarehouseListRelationFilter } from "../../tagWarehouse/base/TagWarehouseListRelationFilter";
import { WarehouseMerchantListRelationFilter } from "../../warehouseMerchant/base/WarehouseMerchantListRelationFilter";
import { WarehouseProductListRelationFilter } from "../../warehouseProduct/base/WarehouseProductListRelationFilter";

@InputType()
class WarehouseWhereInput {
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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  active?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: () => ContactWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactWhereUniqueInput)
  @IsOptional()
  @Field(() => ContactWhereUniqueInput, {
    nullable: true,
  })
  contact?: ContactWhereUniqueInput;

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
    type: () => TagWarehouseListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TagWarehouseListRelationFilter)
  @IsOptional()
  @Field(() => TagWarehouseListRelationFilter, {
    nullable: true,
  })
  tagWarehouse?: TagWarehouseListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WarehouseMerchantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WarehouseMerchantListRelationFilter)
  @IsOptional()
  @Field(() => WarehouseMerchantListRelationFilter, {
    nullable: true,
  })
  warehouseMerchant?: WarehouseMerchantListRelationFilter;

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

export { WarehouseWhereInput as WarehouseWhereInput };
