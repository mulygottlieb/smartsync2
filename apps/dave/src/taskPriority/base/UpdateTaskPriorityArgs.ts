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
import { TaskPriorityWhereUniqueInput } from "./TaskPriorityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TaskPriorityUpdateInput } from "./TaskPriorityUpdateInput";

@ArgsType()
class UpdateTaskPriorityArgs {
  @ApiProperty({
    required: true,
    type: () => TaskPriorityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskPriorityWhereUniqueInput)
  @Field(() => TaskPriorityWhereUniqueInput, { nullable: false })
  where!: TaskPriorityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TaskPriorityUpdateInput,
  })
  @ValidateNested()
  @Type(() => TaskPriorityUpdateInput)
  @Field(() => TaskPriorityUpdateInput, { nullable: false })
  data!: TaskPriorityUpdateInput;
}

export { UpdateTaskPriorityArgs as UpdateTaskPriorityArgs };