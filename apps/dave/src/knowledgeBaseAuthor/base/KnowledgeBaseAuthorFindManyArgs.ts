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
import { KnowledgeBaseAuthorWhereInput } from "./KnowledgeBaseAuthorWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { KnowledgeBaseAuthorOrderByInput } from "./KnowledgeBaseAuthorOrderByInput";

@ArgsType()
class KnowledgeBaseAuthorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => KnowledgeBaseAuthorWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => KnowledgeBaseAuthorWhereInput, { nullable: true })
  @Type(() => KnowledgeBaseAuthorWhereInput)
  where?: KnowledgeBaseAuthorWhereInput;

  @ApiProperty({
    required: false,
    type: [KnowledgeBaseAuthorOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [KnowledgeBaseAuthorOrderByInput], { nullable: true })
  @Type(() => KnowledgeBaseAuthorOrderByInput)
  orderBy?: Array<KnowledgeBaseAuthorOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { KnowledgeBaseAuthorFindManyArgs as KnowledgeBaseAuthorFindManyArgs };
