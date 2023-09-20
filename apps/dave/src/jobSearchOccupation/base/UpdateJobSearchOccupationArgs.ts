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
import { JobSearchOccupationWhereUniqueInput } from "./JobSearchOccupationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { JobSearchOccupationUpdateInput } from "./JobSearchOccupationUpdateInput";

@ArgsType()
class UpdateJobSearchOccupationArgs {
  @ApiProperty({
    required: true,
    type: () => JobSearchOccupationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobSearchOccupationWhereUniqueInput)
  @Field(() => JobSearchOccupationWhereUniqueInput, { nullable: false })
  where!: JobSearchOccupationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => JobSearchOccupationUpdateInput,
  })
  @ValidateNested()
  @Type(() => JobSearchOccupationUpdateInput)
  @Field(() => JobSearchOccupationUpdateInput, { nullable: false })
  data!: JobSearchOccupationUpdateInput;
}

export { UpdateJobSearchOccupationArgs as UpdateJobSearchOccupationArgs };
