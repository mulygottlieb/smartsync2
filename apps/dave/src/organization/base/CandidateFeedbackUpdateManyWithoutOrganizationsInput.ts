/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CandidateFeedbackWhereUniqueInput } from "../../candidateFeedback/base/CandidateFeedbackWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CandidateFeedbackUpdateManyWithoutOrganizationsInput {
  @Field(() => [CandidateFeedbackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateFeedbackWhereUniqueInput],
  })
  connect?: Array<CandidateFeedbackWhereUniqueInput>;

  @Field(() => [CandidateFeedbackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateFeedbackWhereUniqueInput],
  })
  disconnect?: Array<CandidateFeedbackWhereUniqueInput>;

  @Field(() => [CandidateFeedbackWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidateFeedbackWhereUniqueInput],
  })
  set?: Array<CandidateFeedbackWhereUniqueInput>;
}

export { CandidateFeedbackUpdateManyWithoutOrganizationsInput as CandidateFeedbackUpdateManyWithoutOrganizationsInput };
