function AllNumber(...num){
    return num;
}

// console.log(AllNumber(10,20,30,20,20,));


function UserDetails(user){
    console.log(`User Name is ${user.name} and Price is ${user.price}`);
}

const user1 = {
    name : "Ram",
    price :199
}
// UserDetails(user1)
// UserDetails({
//     name : "Shyam",
//     price : 522
// })


function getValueSecondPosition(array){
    return array[1];
}

const array = [123,456,789];
// console.log(getValueSecondPosition(array));
console.log(getValueSecondPosition([456,132,987,453,896435]));
