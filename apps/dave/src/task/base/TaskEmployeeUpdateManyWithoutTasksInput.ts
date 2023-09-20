/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TaskEmployeeWhereUniqueInput } from "../../taskEmployee/base/TaskEmployeeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TaskEmployeeUpdateManyWithoutTasksInput {
  @Field(() => [TaskEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskEmployeeWhereUniqueInput],
  })
  connect?: Array<TaskEmployeeWhereUniqueInput>;

  @Field(() => [TaskEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskEmployeeWhereUniqueInput],
  })
  disconnect?: Array<TaskEmployeeWhereUniqueInput>;

  @Field(() => [TaskEmployeeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskEmployeeWhereUniqueInput],
  })
  set?: Array<TaskEmployeeWhereUniqueInput>;
}

export { TaskEmployeeUpdateManyWithoutTasksInput as TaskEmployeeUpdateManyWithoutTasksInput };
