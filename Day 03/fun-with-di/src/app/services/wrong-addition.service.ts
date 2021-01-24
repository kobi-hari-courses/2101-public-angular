import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable()
export class WrongAdditionService {
    public readonly id: number;

    constructor(private history: HistoryService) {
        this.id = Math.round(Math.random() * 100000);
        console.log(`Wrong Addition Service Created with ID: ${this.id}`);
    }

    add(op1: number, op2: number): number {
        this.history.log(`wrong add: ${op1} ${op2}`);
        return op1 + op2 + 1;
    }
}