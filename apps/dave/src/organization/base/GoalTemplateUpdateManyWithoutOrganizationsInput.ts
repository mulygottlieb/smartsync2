/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GoalTemplateWhereUniqueInput } from "../../goalTemplate/base/GoalTemplateWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class GoalTemplateUpdateManyWithoutOrganizationsInput {
  @Field(() => [GoalTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GoalTemplateWhereUniqueInput],
  })
  connect?: Array<GoalTemplateWhereUniqueInput>;

  @Field(() => [GoalTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GoalTemplateWhereUniqueInput],
  })
  disconnect?: Array<GoalTemplateWhereUniqueInput>;

  @Field(() => [GoalTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GoalTemplateWhereUniqueInput],
  })
  set?: Array<GoalTemplateWhereUniqueInput>;
}

export { GoalTemplateUpdateManyWithoutOrganizationsInput as GoalTemplateUpdateManyWithoutOrganizationsInput };