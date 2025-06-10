const Obj1 = {
    name : "Ram",
    Age : "18",
    City : "Bhavnagar",
    email : "ram231@gmail.com",
};

// console.log(Obj1.name);
// console.log(Obj1["email"])

// Obj1.email="ram47@gmail.com";
// console.log(Obj1["email"]);
// Object.freeze(Obj1);
// Obj1.email="ram472@gmail.com";
// console.log(Obj1.email);

Obj1.greeting = function(){
    console.log("Hello,World");
    
}
//console.log(Obj1.greeting());

Obj1.greeting1 = function(){
    console.log(`Name is ${this.name} and Age is ${this.age}`);
}
Obj1.greeting1();




