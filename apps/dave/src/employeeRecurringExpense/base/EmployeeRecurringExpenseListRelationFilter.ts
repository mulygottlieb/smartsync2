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
import { EmployeeRecurringExpenseWhereInput } from "./EmployeeRecurringExpenseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmployeeRecurringExpenseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EmployeeRecurringExpenseWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeRecurringExpenseWhereInput)
  @IsOptional()
  @Field(() => EmployeeRecurringExpenseWhereInput, {
    nullable: true,
  })
  every?: EmployeeRecurringExpenseWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeRecurringExpenseWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeRecurringExpenseWhereInput)
  @IsOptional()
  @Field(() => EmployeeRecurringExpenseWhereInput, {
    nullable: true,
  })
  some?: EmployeeRecurringExpenseWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeRecurringExpenseWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeRecurringExpenseWhereInput)
  @IsOptional()
  @Field(() => EmployeeRecurringExpenseWhereInput, {
    nullable: true,
  })
  none?: EmployeeRecurringExpenseWhereInput;
}
export { EmployeeRecurringExpenseListRelationFilter as EmployeeRecurringExpenseListRelationFilter };
