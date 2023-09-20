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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { Type } from "class-transformer";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../../imageAsset/base/ImageAssetWhereUniqueInput";
import { ProductCreateNestedManyWithoutProductCategoriesInput } from "./ProductCreateNestedManyWithoutProductCategoriesInput";
import { ProductCategoryTranslationCreateNestedManyWithoutProductCategoriesInput } from "./ProductCategoryTranslationCreateNestedManyWithoutProductCategoriesInput";

@InputType()
class ProductCategoryCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageUrl?: string | null;

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
  tenant?: TenantWhereUniqueInput | null;

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
  organization?: OrganizationWhereUniqueInput | null;

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
  imageAsset?: ImageAssetWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProductCreateNestedManyWithoutProductCategoriesInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateNestedManyWithoutProductCategoriesInput)
  @IsOptional()
  @Field(() => ProductCreateNestedManyWithoutProductCategoriesInput, {
    nullable: true,
  })
  product?: ProductCreateNestedManyWithoutProductCategoriesInput;

  @ApiProperty({
    required: false,
    type: () =>
      ProductCategoryTranslationCreateNestedManyWithoutProductCategoriesInput,
  })
  @ValidateNested()
  @Type(
    () =>
      ProductCategoryTranslationCreateNestedManyWithoutProductCategoriesInput
  )
  @IsOptional()
  @Field(
    () =>
      ProductCategoryTranslationCreateNestedManyWithoutProductCategoriesInput,
    {
      nullable: true,
    }
  )
  productCategoryTranslation?: ProductCategoryTranslationCreateNestedManyWithoutProductCategoriesInput;
}

export { ProductCategoryCreateInput as ProductCategoryCreateInput };
