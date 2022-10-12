// 2) протипізувати функції:

export interface IUser {
    name: string
    age: number
    gender: string
}


const max: IUser = {
    name: "Max",
    age: 17,
    gender: "male"
}


function sum(a:number, b:number) {
    return a + b
}


function showSum(a:number, b:number) {
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number) {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
console.log(incAge(max, 2));