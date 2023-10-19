"use strict";
const reverseArray = (...arr) => {
    const result = arr.reverse();
    return result;
};
const reverseResult = reverseArray("nikola", "tesla", "world", "stark", "natasha");
console.log(reverseResult);
