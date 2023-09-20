/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TaskPriorityWhereUniqueInput } from "../../taskPriority/base/TaskPriorityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TaskPriorityUpdateManyWithoutOrganizationTeamsInput {
  @Field(() => [TaskPriorityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskPriorityWhereUniqueInput],
  })
  connect?: Array<TaskPriorityWhereUniqueInput>;

  @Field(() => [TaskPriorityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskPriorityWhereUniqueInput],
  })
  disconnect?: Array<TaskPriorityWhereUniqueInput>;

  @Field(() => [TaskPriorityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskPriorityWhereUniqueInput],
  })
  set?: Array<TaskPriorityWhereUniqueInput>;
}

export { TaskPriorityUpdateManyWithoutOrganizationTeamsInput as TaskPriorityUpdateManyWithoutOrganizationTeamsInput };
