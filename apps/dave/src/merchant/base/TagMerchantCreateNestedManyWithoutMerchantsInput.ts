/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TagMerchantWhereUniqueInput } from "../../tagMerchant/base/TagMerchantWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TagMerchantCreateNestedManyWithoutMerchantsInput {
  @Field(() => [TagMerchantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagMerchantWhereUniqueInput],
  })
  connect?: Array<TagMerchantWhereUniqueInput>;
}

export { TagMerchantCreateNestedManyWithoutMerchantsInput as TagMerchantCreateNestedManyWithoutMerchantsInput };