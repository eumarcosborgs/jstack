const array = [
  { name: 'Iphone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

//.find
const find = array.find((product) => product.price > 1000);
// console.log({ find });


//.findIndex
const findIndex = array.findIndex((product) => product.quantity >= 3);
// console.log({ findIndex });


//.some
const some = array.some((product) => product.price > 1000);
// console.log({ some });


//.every
const every = array.every((product) => product.price >= 1000)
// console.log({ every });


//.map
const map = array.map((product) => ({
  ...product,
  subTotal: product.quantity * product.price
}));
// console.log({ map });


//.filter
const filter = array.filter((product) => product.quantity >= 2);
// console.log({ filter });


//.reduce
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity)
}, 0)
console.log({ reduce })

// const reduce = array.reduce((accumulator, product) => {
//   return accumulator = [...accumulator, product.name]
// }, [])
// console.log({ reduce })
