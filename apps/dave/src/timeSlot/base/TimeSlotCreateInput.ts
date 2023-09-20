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
import { TimeSlotTimeLogCreateNestedManyWithoutTimeSlotsInput } from "./TimeSlotTimeLogCreateNestedManyWithoutTimeSlotsInput";
import { ValidateNested, IsOptional, IsInt, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { ActivityCreateNestedManyWithoutTimeSlotsInput } from "./ActivityCreateNestedManyWithoutTimeSlotsInput";
import { ScreenshotCreateNestedManyWithoutTimeSlotsInput } from "./ScreenshotCreateNestedManyWithoutTimeSlotsInput";
import { TimeSlotMinuteCreateNestedManyWithoutTimeSlotsInput } from "./TimeSlotMinuteCreateNestedManyWithoutTimeSlotsInput";

@InputType()
class TimeSlotCreateInput {
  @ApiProperty({
    required: false,
    type: () => TimeSlotTimeLogCreateNestedManyWithoutTimeSlotsInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotTimeLogCreateNestedManyWithoutTimeSlotsInput)
  @IsOptional()
  @Field(() => TimeSlotTimeLogCreateNestedManyWithoutTimeSlotsInput, {
    nullable: true,
  })
  timeSlotTimeLogs?: TimeSlotTimeLogCreateNestedManyWithoutTimeSlotsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  duration!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  keyboard!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  mouse!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  overall!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @Field(() => EmployeeWhereUniqueInput)
  employee!: EmployeeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenant?: TenantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ActivityCreateNestedManyWithoutTimeSlotsInput,
  })
  @ValidateNested()
  @Type(() => ActivityCreateNestedManyWithoutTimeSlotsInput)
  @IsOptional()
  @Field(() => ActivityCreateNestedManyWithoutTimeSlotsInput, {
    nullable: true,
  })
  activity?: ActivityCreateNestedManyWithoutTimeSlotsInput;

  @ApiProperty({
    required: false,
    type: () => ScreenshotCreateNestedManyWithoutTimeSlotsInput,
  })
  @ValidateNested()
  @Type(() => ScreenshotCreateNestedManyWithoutTimeSlotsInput)
  @IsOptional()
  @Field(() => ScreenshotCreateNestedManyWithoutTimeSlotsInput, {
    nullable: true,
  })
  screenshot?: ScreenshotCreateNestedManyWithoutTimeSlotsInput;

  @ApiProperty({
    required: false,
    type: () => TimeSlotMinuteCreateNestedManyWithoutTimeSlotsInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotMinuteCreateNestedManyWithoutTimeSlotsInput)
  @IsOptional()
  @Field(() => TimeSlotMinuteCreateNestedManyWithoutTimeSlotsInput, {
    nullable: true,
  })
  timeSlotMinute?: TimeSlotMinuteCreateNestedManyWithoutTimeSlotsInput;
}

export { TimeSlotCreateInput as TimeSlotCreateInput };
