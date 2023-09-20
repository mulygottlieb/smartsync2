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
import { CandidateCriterionRatingWhereUniqueInput } from "./CandidateCriterionRatingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CandidateCriterionRatingUpdateInput } from "./CandidateCriterionRatingUpdateInput";

@ArgsType()
class UpdateCandidateCriterionRatingArgs {
  @ApiProperty({
    required: true,
    type: () => CandidateCriterionRatingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CandidateCriterionRatingWhereUniqueInput)
  @Field(() => CandidateCriterionRatingWhereUniqueInput, { nullable: false })
  where!: CandidateCriterionRatingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CandidateCriterionRatingUpdateInput,
  })
  @ValidateNested()
  @Type(() => CandidateCriterionRatingUpdateInput)
  @Field(() => CandidateCriterionRatingUpdateInput, { nullable: false })
  data!: CandidateCriterionRatingUpdateInput;
}

export { UpdateCandidateCriterionRatingArgs as UpdateCandidateCriterionRatingArgs };
