import { Image } from "./Image";

export interface Area {
  id: number;
  name: string;
  slug: string;
  summary: string;
  color: string;
  cover: Image;
  banner: Image;
  code: string;
  sections: any;
}
