import {Item} from './Item';
//This would normally be where we get the data. Can be done via redux or any other state management
//I just mocked the response for this implementation
export const getItems = () => {
    let data = new Array<Item>();
    data.push({
        id: 1,
        name: "Apple",
        price: 3,
    });
    data.push({
        id: 2,
        name: "Bag of Grapes",
        price: 5});
    data.push({
        id: 3,
        name: "Peach",
        price: 7});
    return data;
}
//This is just here for the purpose of this challenge to pre-populate selected items
export const populateTransactionItems = () => {
    return [
        {
          id: 1,
          name: "Apple",
          price: 3,
          count: 0
        },
        {
          id: 2,
          name: "Bag of Grapes",
          price: 5,
          count: 0
        },
        {
          id: 3,
          name: "Peach",
          price: 7,
          count: 0
        }
      ]
}