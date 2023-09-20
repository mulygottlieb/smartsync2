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
import { TagProposalWhereInput } from "./TagProposalWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TagProposalListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TagProposalWhereInput,
  })
  @ValidateNested()
  @Type(() => TagProposalWhereInput)
  @IsOptional()
  @Field(() => TagProposalWhereInput, {
    nullable: true,
  })
  every?: TagProposalWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagProposalWhereInput,
  })
  @ValidateNested()
  @Type(() => TagProposalWhereInput)
  @IsOptional()
  @Field(() => TagProposalWhereInput, {
    nullable: true,
  })
  some?: TagProposalWhereInput;

  @ApiProperty({
    required: false,
    type: () => TagProposalWhereInput,
  })
  @ValidateNested()
  @Type(() => TagProposalWhereInput)
  @IsOptional()
  @Field(() => TagProposalWhereInput, {
    nullable: true,
  })
  none?: TagProposalWhereInput;
}
export { TagProposalListRelationFilter as TagProposalListRelationFilter };