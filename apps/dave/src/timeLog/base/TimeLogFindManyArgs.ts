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
import { TimeLogWhereInput } from "./TimeLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TimeLogOrderByInput } from "./TimeLogOrderByInput";

@ArgsType()
class TimeLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TimeLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TimeLogWhereInput, { nullable: true })
  @Type(() => TimeLogWhereInput)
  where?: TimeLogWhereInput;

  @ApiProperty({
    required: false,
    type: [TimeLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TimeLogOrderByInput], { nullable: true })
  @Type(() => TimeLogOrderByInput)
  orderBy?: Array<TimeLogOrderByInput>;

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

export { TimeLogFindManyArgs as TimeLogFindManyArgs };