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
import { ChangelogWhereInput } from "./ChangelogWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChangelogListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ChangelogWhereInput,
  })
  @ValidateNested()
  @Type(() => ChangelogWhereInput)
  @IsOptional()
  @Field(() => ChangelogWhereInput, {
    nullable: true,
  })
  every?: ChangelogWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChangelogWhereInput,
  })
  @ValidateNested()
  @Type(() => ChangelogWhereInput)
  @IsOptional()
  @Field(() => ChangelogWhereInput, {
    nullable: true,
  })
  some?: ChangelogWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChangelogWhereInput,
  })
  @ValidateNested()
  @Type(() => ChangelogWhereInput)
  @IsOptional()
  @Field(() => ChangelogWhereInput, {
    nullable: true,
  })
  none?: ChangelogWhereInput;
}
export { ChangelogListRelationFilter as ChangelogListRelationFilter };
