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
import { EmployeeAwardWhereUniqueInput } from "./EmployeeAwardWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeAwardUpdateInput } from "./EmployeeAwardUpdateInput";

@ArgsType()
class UpdateEmployeeAwardArgs {
  @ApiProperty({
    required: true,
    type: () => EmployeeAwardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeAwardWhereUniqueInput)
  @Field(() => EmployeeAwardWhereUniqueInput, { nullable: false })
  where!: EmployeeAwardWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmployeeAwardUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmployeeAwardUpdateInput)
  @Field(() => EmployeeAwardUpdateInput, { nullable: false })
  data!: EmployeeAwardUpdateInput;
}

export { UpdateEmployeeAwardArgs as UpdateEmployeeAwardArgs };