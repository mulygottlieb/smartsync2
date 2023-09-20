/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TimeSlotMinuteWhereUniqueInput } from "./TimeSlotMinuteWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TimeSlotMinuteUpdateInput } from "./TimeSlotMinuteUpdateInput";

@ArgsType()
class UpdateTimeSlotMinuteArgs {
  @ApiProperty({
    required: true,
    type: () => TimeSlotMinuteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotMinuteWhereUniqueInput)
  @Field(() => TimeSlotMinuteWhereUniqueInput, { nullable: false })
  where!: TimeSlotMinuteWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TimeSlotMinuteUpdateInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotMinuteUpdateInput)
  @Field(() => TimeSlotMinuteUpdateInput, { nullable: false })
  data!: TimeSlotMinuteUpdateInput;
}

export { UpdateTimeSlotMinuteArgs as UpdateTimeSlotMinuteArgs };
