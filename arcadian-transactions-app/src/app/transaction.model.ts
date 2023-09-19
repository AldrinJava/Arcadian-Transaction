export class Transaction {
    id: number;
    transactionName: string;
    date: Date;
    cost: number;

    constructor() {
        this.id = 0;  // or any default value
        this.transactionName = '';
        this.date = new Date();
        this.cost = 0;
    }
}
