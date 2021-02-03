// const user = {
//     id: 10413,name: 'shakil khan',friendsAge:[12, 25, 30, 40],friendsName :['shakil', 'shakib', 'azad']
// };
// const userJson = JSON.stringify(user);
// const userFromJson = JSON.parse(userJson);
// console.log("javascript Object", userJson);
// console.log('JSON :', userFromJson);



// mapping

// const numbers = [2, 3, 4, 5, 6, 7, 8];
// // let resultInside = []
// // for (let i = 0; i < numbers.length; i++) {
// //     const element = numbers[i];
// //     const result = element * element;
// //     resultInside.push(result);
// // }

// // map--> Array, find--> one Element , filter--> array,only the matching element;
// // console.log(resultInside);

// // const result = numbers.map(x => x * x);
// // console.log(result);

// // const bigger = numbers.filter(x  => x/2)
// const isThere = numbers.find(x => x>5)
// console.log(isThere);

const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     const result = number * number;
//     box.push(result);

// }
const result = numbers.map(x => x * x);
console.log(result);