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
import { TaskLinkedIssueCreateInput } from "./TaskLinkedIssueCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateTaskLinkedIssueArgs {
  @ApiProperty({
    required: true,
    type: () => TaskLinkedIssueCreateInput,
  })
  @ValidateNested()
  @Type(() => TaskLinkedIssueCreateInput)
  @Field(() => TaskLinkedIssueCreateInput, { nullable: false })
  data!: TaskLinkedIssueCreateInput;
}

export { CreateTaskLinkedIssueArgs as CreateTaskLinkedIssueArgs };