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
import { RequestApprovalEmployeeWhereInput } from "./RequestApprovalEmployeeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RequestApprovalEmployeeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RequestApprovalEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestApprovalEmployeeWhereInput)
  @IsOptional()
  @Field(() => RequestApprovalEmployeeWhereInput, {
    nullable: true,
  })
  every?: RequestApprovalEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => RequestApprovalEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestApprovalEmployeeWhereInput)
  @IsOptional()
  @Field(() => RequestApprovalEmployeeWhereInput, {
    nullable: true,
  })
  some?: RequestApprovalEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => RequestApprovalEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => RequestApprovalEmployeeWhereInput)
  @IsOptional()
  @Field(() => RequestApprovalEmployeeWhereInput, {
    nullable: true,
  })
  none?: RequestApprovalEmployeeWhereInput;
}
export { RequestApprovalEmployeeListRelationFilter as RequestApprovalEmployeeListRelationFilter };