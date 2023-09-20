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
import { TagEmployeeWhereInput } from "./TagEmployeeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TagEmployeeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TagEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => TagEmployeeWhereInput)
  @IsOptional()
  @Field(() => TagEmployeeWhereInput, {
    nullable: true,
  })
  every?: TagEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => TagEmployeeWhereInput)
  @IsOptional()
  @Field(() => TagEmployeeWhereInput, {
    nullable: true,
  })
  some?: TagEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => TagEmployeeWhereInput)
  @IsOptional()
  @Field(() => TagEmployeeWhereInput, {
    nullable: true,
  })
  none?: TagEmployeeWhereInput;
}
export { TagEmployeeListRelationFilter as TagEmployeeListRelationFilter };