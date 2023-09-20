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
import { TagPaymentWhereUniqueInput } from "./TagPaymentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TagPaymentUpdateInput } from "./TagPaymentUpdateInput";

@ArgsType()
class UpdateTagPaymentArgs {
  @ApiProperty({
    required: true,
    type: () => TagPaymentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagPaymentWhereUniqueInput)
  @Field(() => TagPaymentWhereUniqueInput, { nullable: false })
  where!: TagPaymentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TagPaymentUpdateInput,
  })
  @ValidateNested()
  @Type(() => TagPaymentUpdateInput)
  @Field(() => TagPaymentUpdateInput, { nullable: false })
  data!: TagPaymentUpdateInput;
}

export { UpdateTagPaymentArgs as UpdateTagPaymentArgs };
