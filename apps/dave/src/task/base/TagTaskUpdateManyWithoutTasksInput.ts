/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TagTaskWhereUniqueInput } from "../../tagTask/base/TagTaskWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TagTaskUpdateManyWithoutTasksInput {
  @Field(() => [TagTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagTaskWhereUniqueInput],
  })
  connect?: Array<TagTaskWhereUniqueInput>;

  @Field(() => [TagTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagTaskWhereUniqueInput],
  })
  disconnect?: Array<TagTaskWhereUniqueInput>;

  @Field(() => [TagTaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagTaskWhereUniqueInput],
  })
  set?: Array<TagTaskWhereUniqueInput>;
}

export { TagTaskUpdateManyWithoutTasksInput as TagTaskUpdateManyWithoutTasksInput };