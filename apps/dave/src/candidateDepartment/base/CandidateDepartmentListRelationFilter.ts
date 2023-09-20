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
import { CandidateDepartmentWhereInput } from "./CandidateDepartmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CandidateDepartmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CandidateDepartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateDepartmentWhereInput)
  @IsOptional()
  @Field(() => CandidateDepartmentWhereInput, {
    nullable: true,
  })
  every?: CandidateDepartmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateDepartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateDepartmentWhereInput)
  @IsOptional()
  @Field(() => CandidateDepartmentWhereInput, {
    nullable: true,
  })
  some?: CandidateDepartmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => CandidateDepartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => CandidateDepartmentWhereInput)
  @IsOptional()
  @Field(() => CandidateDepartmentWhereInput, {
    nullable: true,
  })
  none?: CandidateDepartmentWhereInput;
}
export { CandidateDepartmentListRelationFilter as CandidateDepartmentListRelationFilter };
