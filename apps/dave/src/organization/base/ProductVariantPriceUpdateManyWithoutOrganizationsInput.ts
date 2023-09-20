/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductVariantPriceWhereUniqueInput } from "../../productVariantPrice/base/ProductVariantPriceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProductVariantPriceUpdateManyWithoutOrganizationsInput {
  @Field(() => [ProductVariantPriceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductVariantPriceWhereUniqueInput],
  })
  connect?: Array<ProductVariantPriceWhereUniqueInput>;

  @Field(() => [ProductVariantPriceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductVariantPriceWhereUniqueInput],
  })
  disconnect?: Array<ProductVariantPriceWhereUniqueInput>;

  @Field(() => [ProductVariantPriceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductVariantPriceWhereUniqueInput],
  })
  set?: Array<ProductVariantPriceWhereUniqueInput>;
}

export { ProductVariantPriceUpdateManyWithoutOrganizationsInput as ProductVariantPriceUpdateManyWithoutOrganizationsInput };
