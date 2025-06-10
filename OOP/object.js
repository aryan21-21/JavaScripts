const user = {
    username : "Ram",
    passWrod : 123456
}

// console.log(Object.getOwnPropertyDescriptor(user,"username"))

Object.defineProperty(user,"username",{
    writable : false,
    enumerable :false,
    configurable : false
})

console.log(Object.getOwnPropertyDescriptor(user,"username"))


user.username = "Shyam";

console.log(user.username);

