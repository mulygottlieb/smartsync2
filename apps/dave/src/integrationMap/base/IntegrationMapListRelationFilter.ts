/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntegrationMapWhereInput } from "./IntegrationMapWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IntegrationMapListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IntegrationMapWhereInput,
  })
  @ValidateNested()
  @Type(() => IntegrationMapWhereInput)
  @IsOptional()
  @Field(() => IntegrationMapWhereInput, {
    nullable: true,
  })
  every?: IntegrationMapWhereInput;

  @ApiProperty({
    required: false,
    type: () => IntegrationMapWhereInput,
  })
  @ValidateNested()
  @Type(() => IntegrationMapWhereInput)
  @IsOptional()
  @Field(() => IntegrationMapWhereInput, {
    nullable: true,
  })
  some?: IntegrationMapWhereInput;

  @ApiProperty({
    required: false,
    type: () => IntegrationMapWhereInput,
  })
  @ValidateNested()
  @Type(() => IntegrationMapWhereInput)
  @IsOptional()
  @Field(() => IntegrationMapWhereInput, {
    nullable: true,
  })
  none?: IntegrationMapWhereInput;
}
export { IntegrationMapListRelationFilter as IntegrationMapListRelationFilter };
