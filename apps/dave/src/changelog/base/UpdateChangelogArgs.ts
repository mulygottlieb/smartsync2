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
import { ChangelogWhereUniqueInput } from "./ChangelogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ChangelogUpdateInput } from "./ChangelogUpdateInput";

@ArgsType()
class UpdateChangelogArgs {
  @ApiProperty({
    required: true,
    type: () => ChangelogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChangelogWhereUniqueInput)
  @Field(() => ChangelogWhereUniqueInput, { nullable: false })
  where!: ChangelogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ChangelogUpdateInput,
  })
  @ValidateNested()
  @Type(() => ChangelogUpdateInput)
  @Field(() => ChangelogUpdateInput, { nullable: false })
  data!: ChangelogUpdateInput;
}

export { UpdateChangelogArgs as UpdateChangelogArgs };
