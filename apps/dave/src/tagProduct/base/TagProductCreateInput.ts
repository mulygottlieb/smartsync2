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
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TagWhereUniqueInput } from "../../tag/base/TagWhereUniqueInput";

@InputType()
class TagProductCreateInput {
  @ApiProperty({
    required: true,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @Field(() => ProductWhereUniqueInput)
  product!: ProductWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TagWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagWhereUniqueInput)
  @Field(() => TagWhereUniqueInput)
  tag!: TagWhereUniqueInput;
}

export { TagProductCreateInput as TagProductCreateInput };
