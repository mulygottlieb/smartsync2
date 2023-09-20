/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TagProductWhereUniqueInput } from "../../tagProduct/base/TagProductWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TagProductUpdateManyWithoutTagsInput {
  @Field(() => [TagProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagProductWhereUniqueInput],
  })
  connect?: Array<TagProductWhereUniqueInput>;

  @Field(() => [TagProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagProductWhereUniqueInput],
  })
  disconnect?: Array<TagProductWhereUniqueInput>;

  @Field(() => [TagProductWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TagProductWhereUniqueInput],
  })
  set?: Array<TagProductWhereUniqueInput>;
}

export { TagProductUpdateManyWithoutTagsInput as TagProductUpdateManyWithoutTagsInput };
