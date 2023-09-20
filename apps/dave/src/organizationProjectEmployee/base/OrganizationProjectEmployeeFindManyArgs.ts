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
import { OrganizationProjectEmployeeWhereInput } from "./OrganizationProjectEmployeeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OrganizationProjectEmployeeOrderByInput } from "./OrganizationProjectEmployeeOrderByInput";

@ArgsType()
class OrganizationProjectEmployeeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OrganizationProjectEmployeeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OrganizationProjectEmployeeWhereInput, { nullable: true })
  @Type(() => OrganizationProjectEmployeeWhereInput)
  where?: OrganizationProjectEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: [OrganizationProjectEmployeeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OrganizationProjectEmployeeOrderByInput], { nullable: true })
  @Type(() => OrganizationProjectEmployeeOrderByInput)
  orderBy?: Array<OrganizationProjectEmployeeOrderByInput>;

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

export { OrganizationProjectEmployeeFindManyArgs as OrganizationProjectEmployeeFindManyArgs };