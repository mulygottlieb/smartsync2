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
import { IssueTypeWhereInput } from "./IssueTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IssueTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IssueTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => IssueTypeWhereInput)
  @IsOptional()
  @Field(() => IssueTypeWhereInput, {
    nullable: true,
  })
  every?: IssueTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => IssueTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => IssueTypeWhereInput)
  @IsOptional()
  @Field(() => IssueTypeWhereInput, {
    nullable: true,
  })
  some?: IssueTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => IssueTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => IssueTypeWhereInput)
  @IsOptional()
  @Field(() => IssueTypeWhereInput, {
    nullable: true,
  })
  none?: IssueTypeWhereInput;
}
export { IssueTypeListRelationFilter as IssueTypeListRelationFilter };
