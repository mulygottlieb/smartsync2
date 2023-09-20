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
import { TagIntegrationWhereInput } from "./TagIntegrationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TagIntegrationOrderByInput } from "./TagIntegrationOrderByInput";

@ArgsType()
class TagIntegrationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TagIntegrationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TagIntegrationWhereInput, { nullable: true })
  @Type(() => TagIntegrationWhereInput)
  where?: TagIntegrationWhereInput;

  @ApiProperty({
    required: false,
    type: [TagIntegrationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TagIntegrationOrderByInput], { nullable: true })
  @Type(() => TagIntegrationOrderByInput)
  orderBy?: Array<TagIntegrationOrderByInput>;

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

export { TagIntegrationFindManyArgs as TagIntegrationFindManyArgs };
