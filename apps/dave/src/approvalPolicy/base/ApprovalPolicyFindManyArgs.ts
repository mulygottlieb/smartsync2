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
import { ApprovalPolicyWhereInput } from "./ApprovalPolicyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ApprovalPolicyOrderByInput } from "./ApprovalPolicyOrderByInput";

@ArgsType()
class ApprovalPolicyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ApprovalPolicyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ApprovalPolicyWhereInput, { nullable: true })
  @Type(() => ApprovalPolicyWhereInput)
  where?: ApprovalPolicyWhereInput;

  @ApiProperty({
    required: false,
    type: [ApprovalPolicyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ApprovalPolicyOrderByInput], { nullable: true })
  @Type(() => ApprovalPolicyOrderByInput)
  orderBy?: Array<ApprovalPolicyOrderByInput>;

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

export { ApprovalPolicyFindManyArgs as ApprovalPolicyFindManyArgs };