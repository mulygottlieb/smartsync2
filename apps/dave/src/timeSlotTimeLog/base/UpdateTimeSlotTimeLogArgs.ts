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
import { TimeSlotTimeLogWhereUniqueInput } from "./TimeSlotTimeLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TimeSlotTimeLogUpdateInput } from "./TimeSlotTimeLogUpdateInput";

@ArgsType()
class UpdateTimeSlotTimeLogArgs {
  @ApiProperty({
    required: true,
    type: () => TimeSlotTimeLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotTimeLogWhereUniqueInput)
  @Field(() => TimeSlotTimeLogWhereUniqueInput, { nullable: false })
  where!: TimeSlotTimeLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TimeSlotTimeLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotTimeLogUpdateInput)
  @Field(() => TimeSlotTimeLogUpdateInput, { nullable: false })
  data!: TimeSlotTimeLogUpdateInput;
}

export { UpdateTimeSlotTimeLogArgs as UpdateTimeSlotTimeLogArgs };
