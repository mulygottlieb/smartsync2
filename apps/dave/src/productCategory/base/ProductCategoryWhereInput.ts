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
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../../imageAsset/base/ImageAssetWhereUniqueInput";
import { ProductListRelationFilter } from "../../product/base/ProductListRelationFilter";
import { ProductCategoryTranslationListRelationFilter } from "../../productCategoryTranslation/base/ProductCategoryTranslationListRelationFilter";

@InputType()
class ProductCategoryWhereInput {
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
    type: () => ProductListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductListRelationFilter)
  @IsOptional()
  @Field(() => ProductListRelationFilter, {
    nullable: true,
  })
  product?: ProductListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProductCategoryTranslationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductCategoryTranslationListRelationFilter)
  @IsOptional()
  @Field(() => ProductCategoryTranslationListRelationFilter, {
    nullable: true,
  })
  productCategoryTranslation?: ProductCategoryTranslationListRelationFilter;
}

export { ProductCategoryWhereInput as ProductCategoryWhereInput };
