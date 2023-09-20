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
import { CandidateDocumentWhereInput } from "./CandidateDocumentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CandidateDocumentOrderByInput } from "./CandidateDocumentOrderByInput";

@ArgsType()
class CandidateDocumentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CandidateDocumentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CandidateDocumentWhereInput, { nullable: true })
  @Type(() => CandidateDocumentWhereInput)
  where?: CandidateDocumentWhereInput;

  @ApiProperty({
    required: false,
    type: [CandidateDocumentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CandidateDocumentOrderByInput], { nullable: true })
  @Type(() => CandidateDocumentOrderByInput)
  orderBy?: Array<CandidateDocumentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CandidateDocumentFindManyArgs as CandidateDocumentFindManyArgs };