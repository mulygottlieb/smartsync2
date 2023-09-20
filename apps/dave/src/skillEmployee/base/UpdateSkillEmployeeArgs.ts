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
import { SkillEmployeeWhereUniqueInput } from "./SkillEmployeeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SkillEmployeeUpdateInput } from "./SkillEmployeeUpdateInput";

@ArgsType()
class UpdateSkillEmployeeArgs {
  @ApiProperty({
    required: true,
    type: () => SkillEmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkillEmployeeWhereUniqueInput)
  @Field(() => SkillEmployeeWhereUniqueInput, { nullable: false })
  where!: SkillEmployeeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SkillEmployeeUpdateInput,
  })
  @ValidateNested()
  @Type(() => SkillEmployeeUpdateInput)
  @Field(() => SkillEmployeeUpdateInput, { nullable: false })
  data!: SkillEmployeeUpdateInput;
}

export { UpdateSkillEmployeeArgs as UpdateSkillEmployeeArgs };
