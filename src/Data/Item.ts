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

//Item would be what's fetched from the api, TransactionItem is an item that's included in a transaction
export type TransactionItem = Item & {
    count: number;
}