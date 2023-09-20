/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AvailabilitySlotWhereUniqueInput } from "../../availabilitySlot/base/AvailabilitySlotWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AvailabilitySlotUpdateManyWithoutOrganizationsInput {
  @Field(() => [AvailabilitySlotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AvailabilitySlotWhereUniqueInput],
  })
  connect?: Array<AvailabilitySlotWhereUniqueInput>;

  @Field(() => [AvailabilitySlotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AvailabilitySlotWhereUniqueInput],
  })
  disconnect?: Array<AvailabilitySlotWhereUniqueInput>;

  @Field(() => [AvailabilitySlotWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AvailabilitySlotWhereUniqueInput],
  })
  set?: Array<AvailabilitySlotWhereUniqueInput>;
}

export { AvailabilitySlotUpdateManyWithoutOrganizationsInput as AvailabilitySlotUpdateManyWithoutOrganizationsInput };