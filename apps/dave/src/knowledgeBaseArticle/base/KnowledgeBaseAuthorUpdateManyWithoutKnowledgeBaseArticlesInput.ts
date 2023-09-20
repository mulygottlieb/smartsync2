/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { KnowledgeBaseAuthorWhereUniqueInput } from "../../knowledgeBaseAuthor/base/KnowledgeBaseAuthorWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class KnowledgeBaseAuthorUpdateManyWithoutKnowledgeBaseArticlesInput {
  @Field(() => [KnowledgeBaseAuthorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KnowledgeBaseAuthorWhereUniqueInput],
  })
  connect?: Array<KnowledgeBaseAuthorWhereUniqueInput>;

  @Field(() => [KnowledgeBaseAuthorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KnowledgeBaseAuthorWhereUniqueInput],
  })
  disconnect?: Array<KnowledgeBaseAuthorWhereUniqueInput>;

  @Field(() => [KnowledgeBaseAuthorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KnowledgeBaseAuthorWhereUniqueInput],
  })
  set?: Array<KnowledgeBaseAuthorWhereUniqueInput>;
}

export { KnowledgeBaseAuthorUpdateManyWithoutKnowledgeBaseArticlesInput as KnowledgeBaseAuthorUpdateManyWithoutKnowledgeBaseArticlesInput };