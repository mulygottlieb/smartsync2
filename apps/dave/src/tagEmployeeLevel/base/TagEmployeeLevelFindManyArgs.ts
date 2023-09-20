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
import { TagEmployeeLevelWhereInput } from "./TagEmployeeLevelWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TagEmployeeLevelOrderByInput } from "./TagEmployeeLevelOrderByInput";

@ArgsType()
class TagEmployeeLevelFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TagEmployeeLevelWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TagEmployeeLevelWhereInput, { nullable: true })
  @Type(() => TagEmployeeLevelWhereInput)
  where?: TagEmployeeLevelWhereInput;

  @ApiProperty({
    required: false,
    type: [TagEmployeeLevelOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TagEmployeeLevelOrderByInput], { nullable: true })
  @Type(() => TagEmployeeLevelOrderByInput)
  orderBy?: Array<TagEmployeeLevelOrderByInput>;

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

export { TagEmployeeLevelFindManyArgs as TagEmployeeLevelFindManyArgs };