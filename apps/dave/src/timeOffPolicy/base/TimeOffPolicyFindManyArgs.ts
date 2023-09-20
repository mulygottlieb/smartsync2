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
import { TimeOffPolicyWhereInput } from "./TimeOffPolicyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TimeOffPolicyOrderByInput } from "./TimeOffPolicyOrderByInput";

@ArgsType()
class TimeOffPolicyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TimeOffPolicyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TimeOffPolicyWhereInput, { nullable: true })
  @Type(() => TimeOffPolicyWhereInput)
  where?: TimeOffPolicyWhereInput;

  @ApiProperty({
    required: false,
    type: [TimeOffPolicyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TimeOffPolicyOrderByInput], { nullable: true })
  @Type(() => TimeOffPolicyOrderByInput)
  orderBy?: Array<TimeOffPolicyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TimeOffPolicyFindManyArgs as TimeOffPolicyFindManyArgs };
