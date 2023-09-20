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
import { TimeOffPolicyWhereUniqueInput } from "../../timeOffPolicy/base/TimeOffPolicyWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class TimeOffPolicyEmployeeWhereInput {
  @ApiProperty({
    required: false,
    type: () => TimeOffPolicyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeOffPolicyWhereUniqueInput)
  @IsOptional()
  @Field(() => TimeOffPolicyWhereUniqueInput, {
    nullable: true,
  })
  timeOffPolicy?: TimeOffPolicyWhereUniqueInput;

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

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { TimeOffPolicyEmployeeWhereInput as TimeOffPolicyEmployeeWhereInput };
