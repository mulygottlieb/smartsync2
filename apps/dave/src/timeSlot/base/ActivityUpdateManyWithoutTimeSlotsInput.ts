/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ActivityWhereUniqueInput } from "../../activity/base/ActivityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ActivityUpdateManyWithoutTimeSlotsInput {
  @Field(() => [ActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ActivityWhereUniqueInput],
  })
  connect?: Array<ActivityWhereUniqueInput>;

  @Field(() => [ActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ActivityWhereUniqueInput],
  })
  disconnect?: Array<ActivityWhereUniqueInput>;

  @Field(() => [ActivityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ActivityWhereUniqueInput],
  })
  set?: Array<ActivityWhereUniqueInput>;
}

export { ActivityUpdateManyWithoutTimeSlotsInput as ActivityUpdateManyWithoutTimeSlotsInput };
