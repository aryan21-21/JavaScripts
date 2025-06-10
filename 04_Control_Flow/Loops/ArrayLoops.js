// let number =[1,2,3,4,5,6,7,8,9,10];
// for (const x of number) {
//     console.log(`Number is : ${x}`);
    
// }

const map = new Map();
map.set("Name ", "Aryan");
map.set("Age ",12)
//console.log(map);

// for (const [k,v] of map) {
//     console.log(`Key is : ${k} Value is : ${v}`);   
// // }
// let number =[1,2,3,4,5,6,7,8,9,10];
// for (const key in number) {
//     console.log(number[key]);   
// }



// let number =[1,2,3,4,5,6,7,8,9,10];
// number.forEach((i)=>{
//     console.log(i);
// })




let User = [
    {
    name:"Ram",
    Age :12
    },
    {
    name:"Shyam",
    Age :18
    },
    {
    name:"Raju",
    Age :22
    }
]
// User.forEach((i)=>{console.log(i.name , i.Age);
// })

User.forEach((i) => {
    console.log(`Name is ${i.name} Age is ${i.Age}`);}
);