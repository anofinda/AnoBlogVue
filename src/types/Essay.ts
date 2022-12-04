import type { AbstractType } from "./AbstractType";

interface Essay extends AbstractType {
  tittle: string;
  content: string;
  tagName: string;
  sticky: number;
  visible: boolean;
  lastUpdate: string;
}
export type { Essay };
