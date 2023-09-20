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
import { EstimateEmailWhereInput } from "./EstimateEmailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EstimateEmailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EstimateEmailWhereInput,
  })
  @ValidateNested()
  @Type(() => EstimateEmailWhereInput)
  @IsOptional()
  @Field(() => EstimateEmailWhereInput, {
    nullable: true,
  })
  every?: EstimateEmailWhereInput;

  @ApiProperty({
    required: false,
    type: () => EstimateEmailWhereInput,
  })
  @ValidateNested()
  @Type(() => EstimateEmailWhereInput)
  @IsOptional()
  @Field(() => EstimateEmailWhereInput, {
    nullable: true,
  })
  some?: EstimateEmailWhereInput;

  @ApiProperty({
    required: false,
    type: () => EstimateEmailWhereInput,
  })
  @ValidateNested()
  @Type(() => EstimateEmailWhereInput)
  @IsOptional()
  @Field(() => EstimateEmailWhereInput, {
    nullable: true,
  })
  none?: EstimateEmailWhereInput;
}
export { EstimateEmailListRelationFilter as EstimateEmailListRelationFilter };
