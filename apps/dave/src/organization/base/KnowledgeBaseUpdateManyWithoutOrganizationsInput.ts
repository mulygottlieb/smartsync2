/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { KnowledgeBaseWhereUniqueInput } from "../../knowledgeBase/base/KnowledgeBaseWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class KnowledgeBaseUpdateManyWithoutOrganizationsInput {
  @Field(() => [KnowledgeBaseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KnowledgeBaseWhereUniqueInput],
  })
  connect?: Array<KnowledgeBaseWhereUniqueInput>;

  @Field(() => [KnowledgeBaseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KnowledgeBaseWhereUniqueInput],
  })
  disconnect?: Array<KnowledgeBaseWhereUniqueInput>;

  @Field(() => [KnowledgeBaseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KnowledgeBaseWhereUniqueInput],
  })
  set?: Array<KnowledgeBaseWhereUniqueInput>;
}

export { KnowledgeBaseUpdateManyWithoutOrganizationsInput as KnowledgeBaseUpdateManyWithoutOrganizationsInput };
