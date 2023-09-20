/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductVariantWhereUniqueInput } from "./ProductVariantWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProductVariantUpdateInput } from "./ProductVariantUpdateInput";

@ArgsType()
class UpdateProductVariantArgs {
  @ApiProperty({
    required: true,
    type: () => ProductVariantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductVariantWhereUniqueInput)
  @Field(() => ProductVariantWhereUniqueInput, { nullable: false })
  where!: ProductVariantWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProductVariantUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProductVariantUpdateInput)
  @Field(() => ProductVariantUpdateInput, { nullable: false })
  data!: ProductVariantUpdateInput;
}

export { UpdateProductVariantArgs as UpdateProductVariantArgs };
