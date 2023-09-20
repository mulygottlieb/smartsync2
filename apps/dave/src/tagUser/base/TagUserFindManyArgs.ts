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
import { TagUserWhereInput } from "./TagUserWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TagUserOrderByInput } from "./TagUserOrderByInput";

@ArgsType()
class TagUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TagUserWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TagUserWhereInput, { nullable: true })
  @Type(() => TagUserWhereInput)
  where?: TagUserWhereInput;

  @ApiProperty({
    required: false,
    type: [TagUserOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TagUserOrderByInput], { nullable: true })
  @Type(() => TagUserOrderByInput)
  orderBy?: Array<TagUserOrderByInput>;

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

export { TagUserFindManyArgs as TagUserFindManyArgs };
