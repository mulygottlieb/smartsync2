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
import { TaskLinkedIssueWhereUniqueInput } from "./TaskLinkedIssueWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TaskLinkedIssueUpdateInput } from "./TaskLinkedIssueUpdateInput";

@ArgsType()
class UpdateTaskLinkedIssueArgs {
  @ApiProperty({
    required: true,
    type: () => TaskLinkedIssueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskLinkedIssueWhereUniqueInput)
  @Field(() => TaskLinkedIssueWhereUniqueInput, { nullable: false })
  where!: TaskLinkedIssueWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TaskLinkedIssueUpdateInput,
  })
  @ValidateNested()
  @Type(() => TaskLinkedIssueUpdateInput)
  @Field(() => TaskLinkedIssueUpdateInput, { nullable: false })
  data!: TaskLinkedIssueUpdateInput;
}

export { UpdateTaskLinkedIssueArgs as UpdateTaskLinkedIssueArgs };