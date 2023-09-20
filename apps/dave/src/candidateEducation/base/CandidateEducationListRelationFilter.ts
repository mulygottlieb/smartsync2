/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CandidateEducationWhereInput } from "./CandidateEducationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CandidateEducationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CandidateEducationWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateEducationWhereInput)
  @IsOptional()
  @Field(() => CandidateEducationWhereInput, {
    nullable: true,
  })
  every?: CandidateEducationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateEducationWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateEducationWhereInput)
  @IsOptional()
  @Field(() => CandidateEducationWhereInput, {
    nullable: true,
  })
  some?: CandidateEducationWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateEducationWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateEducationWhereInput)
  @IsOptional()
  @Field(() => CandidateEducationWhereInput, {
    nullable: true,
  })
  none?: CandidateEducationWhereInput;
}
export { CandidateEducationListRelationFilter as CandidateEducationListRelationFilter };
