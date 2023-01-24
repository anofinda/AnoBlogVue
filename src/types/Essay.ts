import type { AbstractType } from "./AbstractType";

interface Essay extends AbstractType {
  tittle: string;
  content: string;
  tagName: string;
  sticky: number;
  visible: boolean;
  lastUpdate: string;
}
const emptyEssay: Essay = {
  id: 0,
  tittle: "",
  content: "",
  tagName: "",
  sticky: 0,
  visible: true,
  lastUpdate: "",
  createdTime: "",
};
export { emptyEssay };
export type { Essay };
