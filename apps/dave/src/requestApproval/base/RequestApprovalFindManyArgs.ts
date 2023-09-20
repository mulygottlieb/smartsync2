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
import { RequestApprovalWhereInput } from "./RequestApprovalWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RequestApprovalOrderByInput } from "./RequestApprovalOrderByInput";

@ArgsType()
class RequestApprovalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RequestApprovalWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RequestApprovalWhereInput, { nullable: true })
  @Type(() => RequestApprovalWhereInput)
  where?: RequestApprovalWhereInput;

  @ApiProperty({
    required: false,
    type: [RequestApprovalOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RequestApprovalOrderByInput], { nullable: true })
  @Type(() => RequestApprovalOrderByInput)
  orderBy?: Array<RequestApprovalOrderByInput>;

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

export { RequestApprovalFindManyArgs as RequestApprovalFindManyArgs };
