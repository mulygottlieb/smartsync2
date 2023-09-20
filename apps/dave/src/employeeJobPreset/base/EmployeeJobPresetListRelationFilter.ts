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
import { EmployeeJobPresetWhereInput } from "./EmployeeJobPresetWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmployeeJobPresetListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EmployeeJobPresetWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeJobPresetWhereInput)
  @IsOptional()
  @Field(() => EmployeeJobPresetWhereInput, {
    nullable: true,
  })
  every?: EmployeeJobPresetWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeJobPresetWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeJobPresetWhereInput)
  @IsOptional()
  @Field(() => EmployeeJobPresetWhereInput, {
    nullable: true,
  })
  some?: EmployeeJobPresetWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeJobPresetWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeJobPresetWhereInput)
  @IsOptional()
  @Field(() => EmployeeJobPresetWhereInput, {
    nullable: true,
  })
  none?: EmployeeJobPresetWhereInput;
}
export { EmployeeJobPresetListRelationFilter as EmployeeJobPresetListRelationFilter };
