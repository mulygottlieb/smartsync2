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
import { TimeLogWhereUniqueInput } from "../../timeLog/base/TimeLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TimeSlotWhereUniqueInput } from "../../timeSlot/base/TimeSlotWhereUniqueInput";

@InputType()
class TimeSlotTimeLogCreateInput {
  @ApiProperty({
    required: true,
    type: () => TimeLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeLogWhereUniqueInput)
  @Field(() => TimeLogWhereUniqueInput)
  timeLog!: TimeLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TimeSlotWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotWhereUniqueInput)
  @Field(() => TimeSlotWhereUniqueInput)
  timeSlot!: TimeSlotWhereUniqueInput;
}

export { TimeSlotTimeLogCreateInput as TimeSlotTimeLogCreateInput };