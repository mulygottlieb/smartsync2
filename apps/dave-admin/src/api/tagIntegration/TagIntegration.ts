import { Tag } from "../tag/Tag";
import { Integration } from "../integration/Integration";

export type TagIntegration = {
  tag?: Tag;
  integration?: Integration;
  id: string;
};
