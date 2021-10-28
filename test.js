const array = [
    { id: 5, name: 'Banana', price: 400 },
    { id: 1, name: 'Grape', price: 600 },
    { id: 3, name: 'Orange', price: 300 },
    { id: 4, name: 'Apple', price: 300 },
    { id: 2, name: 'Strawberry', price: 300 },
  ];

const sortArray = [...array].sort((a,b) => a.price - b.price);
console.log(sortArray);