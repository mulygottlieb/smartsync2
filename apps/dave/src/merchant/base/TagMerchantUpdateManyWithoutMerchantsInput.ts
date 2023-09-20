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
class TagMerchantUpdateManyWithoutMerchantsInput {
  @Field(() => [TagMerchantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagMerchantWhereUniqueInput],
  })
  connect?: Array<TagMerchantWhereUniqueInput>;

  @Field(() => [TagMerchantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagMerchantWhereUniqueInput],
  })
  disconnect?: Array<TagMerchantWhereUniqueInput>;

  @Field(() => [TagMerchantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagMerchantWhereUniqueInput],
  })
  set?: Array<TagMerchantWhereUniqueInput>;
}

export { TagMerchantUpdateManyWithoutMerchantsInput as TagMerchantUpdateManyWithoutMerchantsInput };