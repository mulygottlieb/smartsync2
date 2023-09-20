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
import { AppointmentEmployeeWhereInput } from "./AppointmentEmployeeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AppointmentEmployeeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AppointmentEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => AppointmentEmployeeWhereInput)
  @IsOptional()
  @Field(() => AppointmentEmployeeWhereInput, {
    nullable: true,
  })
  every?: AppointmentEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => AppointmentEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => AppointmentEmployeeWhereInput)
  @IsOptional()
  @Field(() => AppointmentEmployeeWhereInput, {
    nullable: true,
  })
  some?: AppointmentEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => AppointmentEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => AppointmentEmployeeWhereInput)
  @IsOptional()
  @Field(() => AppointmentEmployeeWhereInput, {
    nullable: true,
  })
  none?: AppointmentEmployeeWhereInput;
}
export { AppointmentEmployeeListRelationFilter as AppointmentEmployeeListRelationFilter };