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
import { OrganizationPositionWhereInput } from "./OrganizationPositionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrganizationPositionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrganizationPositionWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationPositionWhereInput)
  @IsOptional()
  @Field(() => OrganizationPositionWhereInput, {
    nullable: true,
  })
  every?: OrganizationPositionWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationPositionWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationPositionWhereInput)
  @IsOptional()
  @Field(() => OrganizationPositionWhereInput, {
    nullable: true,
  })
  some?: OrganizationPositionWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationPositionWhereInput,
  })
  @ValidateNested()
  @Type(() => OrganizationPositionWhereInput)
  @IsOptional()
  @Field(() => OrganizationPositionWhereInput, {
    nullable: true,
  })
  none?: OrganizationPositionWhereInput;
}
export { OrganizationPositionListRelationFilter as OrganizationPositionListRelationFilter };
