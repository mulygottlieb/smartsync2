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
import { IssueTypeWhereUniqueInput } from "./IssueTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IssueTypeUpdateInput } from "./IssueTypeUpdateInput";

@ArgsType()
class UpdateIssueTypeArgs {
  @ApiProperty({
    required: true,
    type: () => IssueTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IssueTypeWhereUniqueInput)
  @Field(() => IssueTypeWhereUniqueInput, { nullable: false })
  where!: IssueTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => IssueTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => IssueTypeUpdateInput)
  @Field(() => IssueTypeUpdateInput, { nullable: false })
  data!: IssueTypeUpdateInput;
}

export { UpdateIssueTypeArgs as UpdateIssueTypeArgs };
