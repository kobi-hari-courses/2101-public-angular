import { CellValue } from "./cell-value";

export interface Board {
    items: CellValue[][];
    winner: CellValue;
}