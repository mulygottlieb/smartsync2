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
import { ChangelogWhereInput } from "./ChangelogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ChangelogOrderByInput } from "./ChangelogOrderByInput";

@ArgsType()
class ChangelogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ChangelogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ChangelogWhereInput, { nullable: true })
  @Type(() => ChangelogWhereInput)
  where?: ChangelogWhereInput;

  @ApiProperty({
    required: false,
    type: [ChangelogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ChangelogOrderByInput], { nullable: true })
  @Type(() => ChangelogOrderByInput)
  orderBy?: Array<ChangelogOrderByInput>;

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

export { ChangelogFindManyArgs as ChangelogFindManyArgs };
