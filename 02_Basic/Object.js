const  User1= {
    name : "Rma",
    age :   15,
    email : "ram@gmail.com"
};

const  User2= {
    name : "Shyam",
    age :   18,
    email : "shayam@gmail.com"
};

// const User3 = {
//     User1,User2
// }
// console.log(Object.assign(User1,User2));

const User3 ={...User1,...User2};
console.log(User3);

// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));
// console.log(User.hasOwnProperty("name1"));

//console.log(User3);
