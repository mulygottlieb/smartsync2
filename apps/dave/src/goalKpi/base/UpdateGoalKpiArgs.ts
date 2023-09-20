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
import { GoalKpiWhereUniqueInput } from "./GoalKpiWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GoalKpiUpdateInput } from "./GoalKpiUpdateInput";

@ArgsType()
class UpdateGoalKpiArgs {
  @ApiProperty({
    required: true,
    type: () => GoalKpiWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GoalKpiWhereUniqueInput)
  @Field(() => GoalKpiWhereUniqueInput, { nullable: false })
  where!: GoalKpiWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GoalKpiUpdateInput,
  })
  @ValidateNested()
  @Type(() => GoalKpiUpdateInput)
  @Field(() => GoalKpiUpdateInput, { nullable: false })
  data!: GoalKpiUpdateInput;
}

export { UpdateGoalKpiArgs as UpdateGoalKpiArgs };