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
import { GoalGeneralSettingWhereInput } from "./GoalGeneralSettingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GoalGeneralSettingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GoalGeneralSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => GoalGeneralSettingWhereInput)
  @IsOptional()
  @Field(() => GoalGeneralSettingWhereInput, {
    nullable: true,
  })
  every?: GoalGeneralSettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => GoalGeneralSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => GoalGeneralSettingWhereInput)
  @IsOptional()
  @Field(() => GoalGeneralSettingWhereInput, {
    nullable: true,
  })
  some?: GoalGeneralSettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => GoalGeneralSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => GoalGeneralSettingWhereInput)
  @IsOptional()
  @Field(() => GoalGeneralSettingWhereInput, {
    nullable: true,
  })
  none?: GoalGeneralSettingWhereInput;
}
export { GoalGeneralSettingListRelationFilter as GoalGeneralSettingListRelationFilter };
