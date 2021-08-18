import React, { useState } from "react";
import {TransactionItem} from '../Data/Item'

function Counter(
    {
        item,
        onChangeCallback,
    }:
    {
        item: TransactionItem;
        //Since count is internal to component, parent needs to know what count is (for this implementation)
        //so this is just the communication line
        onChangeCallback: (incomingItem: TransactionItem, count: number) => void;
    }
){

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    onChangeCallback(item, count + 1);
    setCount(count => count + 1);
  };

  //don't decrement past 0
  const handleDecrement = () => {
    if(count > 0){
      onChangeCallback(item, count - 1);
      setCount(count => count - 1);
    }
  };

  return (
      <div style={styles.container}>
        <button style={styles.button} onClick={handleDecrement}>-</button>
        <button style={styles.button} onClick={handleIncrement}>+</button>
        <h5>{item.name + ": " + count + " x " + item.price.toFixed(2)}</h5>

      </div>
  );
}

//This could go in a css file as well, this is just my personal preference
const styles = {
  button: {
    height: 20,
    margin: 5
  },
  container: {
    display: "flex",
    FlexDirection: "row",
    alignItems: "center"
  }
};

export default Counter;