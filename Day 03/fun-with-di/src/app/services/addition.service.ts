import { Injectable } from "@angular/core";
import { HistoryService } from "./history.service";

@Injectable()
export class AdditionService {
    public readonly id: number;

    public serialNumber: number;

    constructor(private history: HistoryService) {
        this.id = Math.round(Math.random() * 100000);
        console.log(`Addition Service Created with ID: ${this.id}`);
    }

    add(op1: number, op2: number): number {
        this.history.log(`add: ${op1} ${op2}`);
        return op1 + op2;
    }
}