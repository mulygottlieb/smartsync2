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
import { CustomSmtpWhereUniqueInput } from "./CustomSmtpWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomSmtpUpdateInput } from "./CustomSmtpUpdateInput";

@ArgsType()
class UpdateCustomSmtpArgs {
  @ApiProperty({
    required: true,
    type: () => CustomSmtpWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomSmtpWhereUniqueInput)
  @Field(() => CustomSmtpWhereUniqueInput, { nullable: false })
  where!: CustomSmtpWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CustomSmtpUpdateInput,
  })
  @ValidateNested()
  @Type(() => CustomSmtpUpdateInput)
  @Field(() => CustomSmtpUpdateInput, { nullable: false })
  data!: CustomSmtpUpdateInput;
}

export { UpdateCustomSmtpArgs as UpdateCustomSmtpArgs };
