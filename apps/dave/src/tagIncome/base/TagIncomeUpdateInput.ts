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
import { TagWhereUniqueInput } from "../../tag/base/TagWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { IncomeWhereUniqueInput } from "../../income/base/IncomeWhereUniqueInput";

@InputType()
class TagIncomeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TagWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagWhereUniqueInput)
  @IsOptional()
  @Field(() => TagWhereUniqueInput, {
    nullable: true,
  })
  tag?: TagWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => IncomeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IncomeWhereUniqueInput)
  @IsOptional()
  @Field(() => IncomeWhereUniqueInput, {
    nullable: true,
  })
  income?: IncomeWhereUniqueInput;
}

export { TagIncomeUpdateInput as TagIncomeUpdateInput };
