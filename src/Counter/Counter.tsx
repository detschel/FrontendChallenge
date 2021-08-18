import React, { useState } from "react";
import {TransactionItem} from '../Data/Item'

function Counter(
    {
        item,
        onChangeCallback,
    }:
    {
        item: TransactionItem;
        onChangeCallback: (incomingItem: TransactionItem, count: number) => void;
    }
){

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    onChangeCallback(item, count + 1);
    setCount(count => count + 1);
  };

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