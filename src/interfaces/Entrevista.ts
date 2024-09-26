import { Image } from "./Image";

export interface Entrevista {
  id: number;
  title: string;
  content: string;
  cover: Image;
  url: string;
}
