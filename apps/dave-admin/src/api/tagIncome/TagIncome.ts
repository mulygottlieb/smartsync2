import { Tag } from "../tag/Tag";
import { Income } from "../income/Income";

export type TagIncome = {
  tag?: Tag;
  income?: Income;
  id: string;
};
