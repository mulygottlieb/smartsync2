/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CandidateCriterionRatingWhereUniqueInput } from "../../candidateCriterionRating/base/CandidateCriterionRatingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CandidateCriterionRatingUpdateManyWithoutOrganizationsInput {
  @Field(() => [CandidateCriterionRatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateCriterionRatingWhereUniqueInput],
  })
  connect?: Array<CandidateCriterionRatingWhereUniqueInput>;

  @Field(() => [CandidateCriterionRatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateCriterionRatingWhereUniqueInput],
  })
  disconnect?: Array<CandidateCriterionRatingWhereUniqueInput>;

  @Field(() => [CandidateCriterionRatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateCriterionRatingWhereUniqueInput],
  })
  set?: Array<CandidateCriterionRatingWhereUniqueInput>;
}

export { CandidateCriterionRatingUpdateManyWithoutOrganizationsInput as CandidateCriterionRatingUpdateManyWithoutOrganizationsInput };
