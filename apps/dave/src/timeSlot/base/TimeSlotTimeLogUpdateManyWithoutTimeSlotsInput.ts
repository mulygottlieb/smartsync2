/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TimeSlotTimeLogWhereUniqueInput } from "../../timeSlotTimeLog/base/TimeSlotTimeLogWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TimeSlotTimeLogUpdateManyWithoutTimeSlotsInput {
  @Field(() => [TimeSlotTimeLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimeSlotTimeLogWhereUniqueInput],
  })
  connect?: Array<TimeSlotTimeLogWhereUniqueInput>;

  @Field(() => [TimeSlotTimeLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimeSlotTimeLogWhereUniqueInput],
  })
  disconnect?: Array<TimeSlotTimeLogWhereUniqueInput>;

  @Field(() => [TimeSlotTimeLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimeSlotTimeLogWhereUniqueInput],
  })
  set?: Array<TimeSlotTimeLogWhereUniqueInput>;
}

export { TimeSlotTimeLogUpdateManyWithoutTimeSlotsInput as TimeSlotTimeLogUpdateManyWithoutTimeSlotsInput };
