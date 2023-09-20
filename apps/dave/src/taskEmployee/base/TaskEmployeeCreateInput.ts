/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";

@InputType()
class TaskEmployeeCreateInput {
  @ApiProperty({
    required: true,
    type: () => TaskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskWhereUniqueInput)
  @Field(() => TaskWhereUniqueInput)
  task!: TaskWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @Field(() => EmployeeWhereUniqueInput)
  employee!: EmployeeWhereUniqueInput;
}

export { TaskEmployeeCreateInput as TaskEmployeeCreateInput };
