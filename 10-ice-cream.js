/*
https://www.youtube.com/watch?v=Ifwf3DBN1sc&list=PLOuZYwbmgZWXvkghUyMLdI90IwxbNCiWK&index=27

We have $X, and need to buy two different items from a menu that match exactly the amount of money we have.
*/

class Item {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }
}

const items = [];
items[0] = new Item ('Strawberry', 2);
items[1] = new Item ('Blueberry', 7);
items[2] = new Item ('Nutella', 13);
items[3] = new Item ('Vanilla', 5);
items[4] = new Item ('Banana', 4);
items[5] = new Item ('Bubblegum', 13);
items[6] = new Item ('Chocolate', 5);

const buyIceCream = (items, money) => {
  const findItem = (list, price, toExclude) => {
    for (let i = 0; i < list.length; i++) {
      if (i == toExclude) {
        continue;
      }

      if (list[i].price == price) {
        return i;
      }
    }

    return false;
  };

  const toBuy = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].price > money) {
      continue;
    }

    const change = money - items[i].price;
    const changeItem = findItem (items, change, i);
    if (changeItem) {
      toBuy[0] = items[i];
      toBuy[1] = items[changeItem];
      return toBuy;
    }
  }

  return false;
};

console.log (buyIceCream (items, 10));
