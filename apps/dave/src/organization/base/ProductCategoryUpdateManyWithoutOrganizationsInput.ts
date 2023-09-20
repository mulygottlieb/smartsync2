/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProductCategoryWhereUniqueInput } from "../../productCategory/base/ProductCategoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProductCategoryUpdateManyWithoutOrganizationsInput {
  @Field(() => [ProductCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductCategoryWhereUniqueInput],
  })
  connect?: Array<ProductCategoryWhereUniqueInput>;

  @Field(() => [ProductCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductCategoryWhereUniqueInput],
  })
  disconnect?: Array<ProductCategoryWhereUniqueInput>;

  @Field(() => [ProductCategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProductCategoryWhereUniqueInput],
  })
  set?: Array<ProductCategoryWhereUniqueInput>;
}

export { ProductCategoryUpdateManyWithoutOrganizationsInput as ProductCategoryUpdateManyWithoutOrganizationsInput };
