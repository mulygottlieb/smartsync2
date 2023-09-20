/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Candidate } from "../../candidate/base/Candidate";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationEmploymentType } from "../../organizationEmploymentType/base/OrganizationEmploymentType";

@ObjectType()
class CandidateEmploymentType {
  @ApiProperty({
    required: true,
    type: () => Candidate,
  })
  @ValidateNested()
  @Type(() => Candidate)
  candidate?: Candidate;

  @ApiProperty({
    required: true,
    type: () => OrganizationEmploymentType,
  })
  @ValidateNested()
  @Type(() => OrganizationEmploymentType)
  organizationEmploymentType?: OrganizationEmploymentType;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { CandidateEmploymentType as CandidateEmploymentType };
