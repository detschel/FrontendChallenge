import React, { useEffect, useState } from 'react';
import Counter from './Counter/Counter';
import { getDiscounts } from './Data/get-dicounts';
import { getItems, populateTransactionItems } from './Data/get-items';
import { TransactionItem } from './Data/Item';

function App() {

  const [transactionItems, setTransactionItems] = useState<TransactionItem[]>(populateTransactionItems());

  const items = getItems();
  
  const calculateTotalPrice = () => {
    const discounts = getDiscounts();
    let totalPrice = 0;
    transactionItems.forEach( item => {
      let discountFunction = discounts.find( discount => discount.itemId === item.id)?.calculateDiscount;
      if(discountFunction) {
        totalPrice += discountFunction(item.count, item.price);
      } else{
        totalPrice += item.count * item.price;
      }
    });
    return totalPrice.toFixed(2);
  }

  calculateTotalPrice();

  const updateCount = (incomingItem: TransactionItem, count: number) => {
    let index = transactionItems.findIndex( item => item.id === incomingItem.id);
    let item = {
      ...transactionItems[index],
      count: count
    };
    transactionItems[index] = item;
    setTransactionItems([...transactionItems]);
  }

  return (
    <div className="App">
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{flexDirection: "row"}}>
          <Counter item={transactionItems[0]} onChangeCallback={updateCount}></Counter>
        </div>
        <div style={{flexDirection: "row"}}>
          <Counter item={transactionItems[1]} onChangeCallback={updateCount}></Counter>
        </div>
        <div style={{flexDirection: "row"}}>
          <Counter item={transactionItems[2]} onChangeCallback={updateCount}></Counter>
        </div>
        <div style={{flexDirection: "row"}}>
          <h4>Total Price: {calculateTotalPrice()}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
