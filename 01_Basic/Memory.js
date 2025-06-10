//Premitive Data Type Dtore In Stack Memory
/*let id = 1234;

let id1 = id; if we can you this type ot give copy not actual refrence

id1 = 4321;

console.log(id , id1);*/

//Non-Premitive Data Type Dtore In Heap Memory

let user1 = {
    Name : "Ram",
    Age :12
}

let user2 = user1;
user2.Name = "Shyam";

console.log(user1.Name);
console.log(user2.Name);