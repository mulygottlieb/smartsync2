/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CandidatePersonalQualityWhereUniqueInput } from "../../candidatePersonalQuality/base/CandidatePersonalQualityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CandidatePersonalQualityUpdateManyWithoutOrganizationsInput {
  @Field(() => [CandidatePersonalQualityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidatePersonalQualityWhereUniqueInput],
  })
  connect?: Array<CandidatePersonalQualityWhereUniqueInput>;

  @Field(() => [CandidatePersonalQualityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidatePersonalQualityWhereUniqueInput],
  })
  disconnect?: Array<CandidatePersonalQualityWhereUniqueInput>;

  @Field(() => [CandidatePersonalQualityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CandidatePersonalQualityWhereUniqueInput],
  })
  set?: Array<CandidatePersonalQualityWhereUniqueInput>;
}

export { CandidatePersonalQualityUpdateManyWithoutOrganizationsInput as CandidatePersonalQualityUpdateManyWithoutOrganizationsInput };
