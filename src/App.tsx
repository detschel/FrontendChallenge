import React, { useState } from 'react';
import Counter from './Counter/Counter';
import { getDiscounts } from './Data/get-dicounts';
import { populateTransactionItems } from './Data/get-items';
import { TransactionItem } from './Data/Item';

function App() {

  //this would normally start as empty and as we scan/add new items, if it isn't already in the list it would be added with a count of 1
  const [transactionItems, setTransactionItems] = useState<TransactionItem[]>(populateTransactionItems());
  
  //This would probably work better with a backend and I would just implement a findDiscount that would take an item id and find any dicount
  //which would be optimized better. For now we just go through our list of items and if there is a discount function, use it to
  //calculate the total for that item and add it to the price, otherwise it's just price * itemCount
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
    //format it nicely
    return totalPrice.toFixed(2);
  }

  //called on render to consistently keep price up to date
  //if component was more complex, this could go in a useMemo so it's only calculated when TransactionItems changes
  calculateTotalPrice();

  //function passed in as callback to counter. Will update TransactionItems with the new count for the item
  //this doesn't handle completley removing an item from a transaction so that is a "would/could have implemented"
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
