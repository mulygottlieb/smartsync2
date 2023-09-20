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
import { EmployeeSettingWhereInput } from "./EmployeeSettingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmployeeSettingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EmployeeSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeSettingWhereInput)
  @IsOptional()
  @Field(() => EmployeeSettingWhereInput, {
    nullable: true,
  })
  every?: EmployeeSettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeSettingWhereInput)
  @IsOptional()
  @Field(() => EmployeeSettingWhereInput, {
    nullable: true,
  })
  some?: EmployeeSettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeSettingWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeSettingWhereInput)
  @IsOptional()
  @Field(() => EmployeeSettingWhereInput, {
    nullable: true,
  })
  none?: EmployeeSettingWhereInput;
}
export { EmployeeSettingListRelationFilter as EmployeeSettingListRelationFilter };
