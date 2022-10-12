"use strict";
// 2) протипізувати функції:
exports.__esModule = true;
var max = {
    name: "Max",
    age: 17,
    gender: "male"
};
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(max, 2));
