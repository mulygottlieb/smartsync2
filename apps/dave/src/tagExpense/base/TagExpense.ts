/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Expense } from "../../expense/base/Expense";
import { ValidateNested, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Tag } from "../../tag/base/Tag";

@ObjectType()
class TagExpense {
  @ApiProperty({
    required: true,
    type: () => Expense,
  })
  @ValidateNested()
  @Type(() => Expense)
  expense?: Expense;

  @ApiProperty({
    required: true,
    type: () => Tag,
  })
  @ValidateNested()
  @Type(() => Tag)
  tag?: Tag;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;
}

export { TagExpense as TagExpense };
