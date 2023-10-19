"use strict";
function personAge(arr) {
    const ageFiler = arr.filter((item) => item.age >= 18);
    return ageFiler;
}
const personArr = [
    { name: "Sundar Pachai", age: 20 },
    { name: "Elon Musk", age: 15 },
    { name: "Jeff Bezos", age: 25 },
    { name: "Tony Stark", age: 17 },
    { name: "Newton Eyenstyne", age: 10 },
    { name: "Nekola Tesla", age: 18 },
];
const filterResult = personAge(personArr);
console.log(filterResult);
