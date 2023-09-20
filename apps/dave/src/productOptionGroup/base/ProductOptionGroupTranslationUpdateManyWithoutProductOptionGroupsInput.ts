/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductOptionGroupTranslationWhereUniqueInput } from "../../productOptionGroupTranslation/base/ProductOptionGroupTranslationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProductOptionGroupTranslationUpdateManyWithoutProductOptionGroupsInput {
  @Field(() => [ProductOptionGroupTranslationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductOptionGroupTranslationWhereUniqueInput],
  })
  connect?: Array<ProductOptionGroupTranslationWhereUniqueInput>;

  @Field(() => [ProductOptionGroupTranslationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductOptionGroupTranslationWhereUniqueInput],
  })
  disconnect?: Array<ProductOptionGroupTranslationWhereUniqueInput>;

  @Field(() => [ProductOptionGroupTranslationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductOptionGroupTranslationWhereUniqueInput],
  })
  set?: Array<ProductOptionGroupTranslationWhereUniqueInput>;
}

export { ProductOptionGroupTranslationUpdateManyWithoutProductOptionGroupsInput as ProductOptionGroupTranslationUpdateManyWithoutProductOptionGroupsInput };
