# Praca domowa, cz. 1

zadanie umieszczone na [stackblitz](https://stackblitz.com/edit/oo-ts-refactor-example)

## Tresc:

```javascript
/**
 * The goal here is to:
 * - make it in 'Object Oriented' manner (use classes)
 * - use types
 * - split code into modules (files)
 */

const item1 = {
  name: "Milk",
  amount: 1
};
const item2 = {
  name: "Bread",
  amount: 1
};

const list = [item1, item2];

function printList(list) {
  let total = 0;
  for (const item of list) {
    console.log(item.name + " x " + item.amount);
    total += item.amount;
  }

  console.log("Things to buy:" + total);
}

console.log("----------------Shopping list-------------");
printList(list);

```
