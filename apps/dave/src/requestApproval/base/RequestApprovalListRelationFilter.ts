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
import { RequestApprovalWhereInput } from "./RequestApprovalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RequestApprovalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RequestApprovalWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestApprovalWhereInput)
  @IsOptional()
  @Field(() => RequestApprovalWhereInput, {
    nullable: true,
  })
  every?: RequestApprovalWhereInput;

  @ApiProperty({
    required: false,
    type: () => RequestApprovalWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestApprovalWhereInput)
  @IsOptional()
  @Field(() => RequestApprovalWhereInput, {
    nullable: true,
  })
  some?: RequestApprovalWhereInput;

  @ApiProperty({
    required: false,
    type: () => RequestApprovalWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestApprovalWhereInput)
  @IsOptional()
  @Field(() => RequestApprovalWhereInput, {
    nullable: true,
  })
  none?: RequestApprovalWhereInput;
}
export { RequestApprovalListRelationFilter as RequestApprovalListRelationFilter };