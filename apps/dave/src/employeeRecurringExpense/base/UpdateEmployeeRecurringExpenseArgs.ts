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
import { EmployeeRecurringExpenseWhereUniqueInput } from "./EmployeeRecurringExpenseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeRecurringExpenseUpdateInput } from "./EmployeeRecurringExpenseUpdateInput";

@ArgsType()
class UpdateEmployeeRecurringExpenseArgs {
  @ApiProperty({
    required: true,
    type: () => EmployeeRecurringExpenseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeRecurringExpenseWhereUniqueInput)
  @Field(() => EmployeeRecurringExpenseWhereUniqueInput, { nullable: false })
  where!: EmployeeRecurringExpenseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmployeeRecurringExpenseUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmployeeRecurringExpenseUpdateInput)
  @Field(() => EmployeeRecurringExpenseUpdateInput, { nullable: false })
  data!: EmployeeRecurringExpenseUpdateInput;
}

export { UpdateEmployeeRecurringExpenseArgs as UpdateEmployeeRecurringExpenseArgs };