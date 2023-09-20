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
import { TimeSlotTimeLogWhereInput } from "./TimeSlotTimeLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TimeSlotTimeLogOrderByInput } from "./TimeSlotTimeLogOrderByInput";

@ArgsType()
class TimeSlotTimeLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TimeSlotTimeLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TimeSlotTimeLogWhereInput, { nullable: true })
  @Type(() => TimeSlotTimeLogWhereInput)
  where?: TimeSlotTimeLogWhereInput;

  @ApiProperty({
    required: false,
    type: [TimeSlotTimeLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TimeSlotTimeLogOrderByInput], { nullable: true })
  @Type(() => TimeSlotTimeLogOrderByInput)
  orderBy?: Array<TimeSlotTimeLogOrderByInput>;

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

export { TimeSlotTimeLogFindManyArgs as TimeSlotTimeLogFindManyArgs };