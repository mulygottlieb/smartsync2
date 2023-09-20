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
import { ProductVariantWhereUniqueInput } from "../../productVariant/base/ProductVariantWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ProductOptionWhereUniqueInput } from "../../productOption/base/ProductOptionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class ProductVariantOptionsProductOptionWhereInput {
  @ApiProperty({
    required: false,
    type: () => ProductVariantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductVariantWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductVariantWhereUniqueInput, {
    nullable: true,
  })
  productVariant?: ProductVariantWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => ProductOptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductOptionWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductOptionWhereUniqueInput, {
    nullable: true,
  })
  productOption?: ProductOptionWhereUniqueInput;

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
}

export { ProductVariantOptionsProductOptionWhereInput as ProductVariantOptionsProductOptionWhereInput };