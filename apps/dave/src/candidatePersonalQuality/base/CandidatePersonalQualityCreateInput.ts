/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsNumber,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";
import { Type } from "class-transformer";
import { CandidateInterviewWhereUniqueInput } from "../../candidateInterview/base/CandidateInterviewWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { CandidateCriterionRatingCreateNestedManyWithoutCandidatePersonalQualitiesInput } from "./CandidateCriterionRatingCreateNestedManyWithoutCandidatePersonalQualitiesInput";

@InputType()
class CandidatePersonalQualityCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  rating?: Decimal | null;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenant?: TenantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CandidateInterviewWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CandidateInterviewWhereUniqueInput)
  @IsOptional()
  @Field(() => CandidateInterviewWhereUniqueInput, {
    nullable: true,
  })
  candidateInterview?: CandidateInterviewWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () =>
      CandidateCriterionRatingCreateNestedManyWithoutCandidatePersonalQualitiesInput,
  })
  @ValidateNested()
  @Type(
    () =>
      CandidateCriterionRatingCreateNestedManyWithoutCandidatePersonalQualitiesInput
  )
  @IsOptional()
  @Field(
    () =>
      CandidateCriterionRatingCreateNestedManyWithoutCandidatePersonalQualitiesInput,
    {
      nullable: true,
    }
  )
  candidateCriterionRating?: CandidateCriterionRatingCreateNestedManyWithoutCandidatePersonalQualitiesInput;
}

export { CandidatePersonalQualityCreateInput as CandidatePersonalQualityCreateInput };