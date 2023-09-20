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
import { TimeLogWhereInput } from "./TimeLogWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TimeLogListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TimeLogWhereInput,
  })
  @ValidateNested()
  @Type(() => TimeLogWhereInput)
  @IsOptional()
  @Field(() => TimeLogWhereInput, {
    nullable: true,
  })
  every?: TimeLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => TimeLogWhereInput,
  })
  @ValidateNested()
  @Type(() => TimeLogWhereInput)
  @IsOptional()
  @Field(() => TimeLogWhereInput, {
    nullable: true,
  })
  some?: TimeLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => TimeLogWhereInput,
  })
  @ValidateNested()
  @Type(() => TimeLogWhereInput)
  @IsOptional()
  @Field(() => TimeLogWhereInput, {
    nullable: true,
  })
  none?: TimeLogWhereInput;
}
export { TimeLogListRelationFilter as TimeLogListRelationFilter };