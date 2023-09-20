/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductOptionWhereUniqueInput } from "../../productOption/base/ProductOptionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProductOptionUpdateManyWithoutOrganizationsInput {
  @Field(() => [ProductOptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductOptionWhereUniqueInput],
  })
  connect?: Array<ProductOptionWhereUniqueInput>;

  @Field(() => [ProductOptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductOptionWhereUniqueInput],
  })
  disconnect?: Array<ProductOptionWhereUniqueInput>;

  @Field(() => [ProductOptionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductOptionWhereUniqueInput],
  })
  set?: Array<ProductOptionWhereUniqueInput>;
}

export { ProductOptionUpdateManyWithoutOrganizationsInput as ProductOptionUpdateManyWithoutOrganizationsInput };
