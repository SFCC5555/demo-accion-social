import { Image } from "./Image";

export interface Area {
  id: number;
  name: string;
  summary: string;
  color: string;
  cover: Image;
  banner: Image;
}
