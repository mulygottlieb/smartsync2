/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TimeOffPolicy } from "../../timeOffPolicy/base/TimeOffPolicy";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Employee } from "../../employee/base/Employee";

@ObjectType()
class TimeOffPolicyEmployee {
  @ApiProperty({
    required: true,
    type: () => TimeOffPolicy,
  })
  @ValidateNested()
  @Type(() => TimeOffPolicy)
  timeOffPolicy?: TimeOffPolicy;

  @ApiProperty({
    required: true,
    type: () => Employee,
  })
  @ValidateNested()
  @Type(() => Employee)
  employee?: Employee;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { TimeOffPolicyEmployee as TimeOffPolicyEmployee };
