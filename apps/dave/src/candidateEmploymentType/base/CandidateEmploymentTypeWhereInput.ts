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
import { CandidateWhereUniqueInput } from "../../candidate/base/CandidateWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationEmploymentTypeWhereUniqueInput } from "../../organizationEmploymentType/base/OrganizationEmploymentTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class CandidateEmploymentTypeWhereInput {
  @ApiProperty({
    required: false,
    type: () => CandidateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CandidateWhereUniqueInput)
  @IsOptional()
  @Field(() => CandidateWhereUniqueInput, {
    nullable: true,
  })
  candidate?: CandidateWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationEmploymentTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationEmploymentTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationEmploymentTypeWhereUniqueInput, {
    nullable: true,
  })
  organizationEmploymentType?: OrganizationEmploymentTypeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}

export { CandidateEmploymentTypeWhereInput as CandidateEmploymentTypeWhereInput };
