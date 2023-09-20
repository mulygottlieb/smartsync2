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
import { InviteWhereInput } from "./InviteWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InviteOrderByInput } from "./InviteOrderByInput";

@ArgsType()
class InviteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InviteWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InviteWhereInput, { nullable: true })
  @Type(() => InviteWhereInput)
  where?: InviteWhereInput;

  @ApiProperty({
    required: false,
    type: [InviteOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InviteOrderByInput], { nullable: true })
  @Type(() => InviteOrderByInput)
  orderBy?: Array<InviteOrderByInput>;

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

export { InviteFindManyArgs as InviteFindManyArgs };
