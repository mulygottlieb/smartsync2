/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TimeSlotWhereUniqueInput } from "../../timeSlot/base/TimeSlotWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TimeSlotUpdateManyWithoutOrganizationsInput {
  @Field(() => [TimeSlotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimeSlotWhereUniqueInput],
  })
  connect?: Array<TimeSlotWhereUniqueInput>;

  @Field(() => [TimeSlotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimeSlotWhereUniqueInput],
  })
  disconnect?: Array<TimeSlotWhereUniqueInput>;

  @Field(() => [TimeSlotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TimeSlotWhereUniqueInput],
  })
  set?: Array<TimeSlotWhereUniqueInput>;
}

export { TimeSlotUpdateManyWithoutOrganizationsInput as TimeSlotUpdateManyWithoutOrganizationsInput };
