export type Item = {
    id: number;
    name: string;
    price: number;
}

export type Discount = {
    discountId: number;
    itemId: number;
    calculateDiscount: (count: number, price: number) => number;
}

export type TransactionItem = Item & {
    count: number;
}