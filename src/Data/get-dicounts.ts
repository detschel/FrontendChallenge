import {Discount} from './Item';

//This would normally be where we get the data. Can be done via redux or any other state management
//I just mocked the response for this implementation
export const getDiscounts = () => {
    let discounts = new Array<Discount>();
    discounts.push({
        discountId: 1,
        itemId: 1,
        calculateDiscount: (count: number, price: number) => {
            let totalPrice = count * price;
            if(count > 1){
                totalPrice = count * price * .8;
            }
            return totalPrice;
        }
    });
    discounts.push({
        discountId: 2,
        itemId: 2,
        calculateDiscount: (count: number, price: number) => {
            return (Math.floor(count/2) + (count % 2)) * price;
        }
    });
    discounts.push({
        discountId: 3,
        itemId: 4,
        calculateDiscount: (count: number, price: number) => {
            return count * price;
        }
    });
    return discounts;
}