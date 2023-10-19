"use strict";
function checkType(txt) {
    if (typeof txt === "string") {
        return txt;
    }
    else {
        return new Error("Something Wrong");
    }
}
const typeResult = checkType("100");
console.log(typeResult);
