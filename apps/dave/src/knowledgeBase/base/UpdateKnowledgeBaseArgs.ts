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
import { KnowledgeBaseWhereUniqueInput } from "./KnowledgeBaseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { KnowledgeBaseUpdateInput } from "./KnowledgeBaseUpdateInput";

@ArgsType()
class UpdateKnowledgeBaseArgs {
  @ApiProperty({
    required: true,
    type: () => KnowledgeBaseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => KnowledgeBaseWhereUniqueInput)
  @Field(() => KnowledgeBaseWhereUniqueInput, { nullable: false })
  where!: KnowledgeBaseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => KnowledgeBaseUpdateInput,
  })
  @ValidateNested()
  @Type(() => KnowledgeBaseUpdateInput)
  @Field(() => KnowledgeBaseUpdateInput, { nullable: false })
  data!: KnowledgeBaseUpdateInput;
}

export { UpdateKnowledgeBaseArgs as UpdateKnowledgeBaseArgs };
