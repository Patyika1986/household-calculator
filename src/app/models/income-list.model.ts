export interface IncomeList {
    id: string;
    title: string;
    value:number;
    since?: Date;
    kind: string;
    isOutOrIncome: boolean;
}
