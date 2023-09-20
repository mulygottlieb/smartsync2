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
import { TimeOffRequestWhereUniqueInput } from "../../timeOffRequest/base/TimeOffRequestWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";

@InputType()
class TimeOffRequestEmployeeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TimeOffRequestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeOffRequestWhereUniqueInput)
  @IsOptional()
  @Field(() => TimeOffRequestWhereUniqueInput, {
    nullable: true,
  })
  timeOffRequest?: TimeOffRequestWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeeWhereUniqueInput, {
    nullable: true,
  })
  employee?: EmployeeWhereUniqueInput;
}

export { TimeOffRequestEmployeeUpdateInput as TimeOffRequestEmployeeUpdateInput };
