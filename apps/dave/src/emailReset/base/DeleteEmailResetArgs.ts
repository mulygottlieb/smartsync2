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
import { EmailResetWhereUniqueInput } from "./EmailResetWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteEmailResetArgs {
  @ApiProperty({
    required: true,
    type: () => EmailResetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmailResetWhereUniqueInput)
  @Field(() => EmailResetWhereUniqueInput, { nullable: false })
  where!: EmailResetWhereUniqueInput;
}

export { DeleteEmailResetArgs as DeleteEmailResetArgs };