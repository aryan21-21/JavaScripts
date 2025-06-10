//Non - Parameterized Function
function SayHello(){
    console.log("Hello Students!");
}
//SayHello();
 
function add(num1,num2){
    return num1 + num2 ;
}
//console.log(add(10,2));


function LogingStatus(user){
    if(!undefined){
        console.log(`${user} just logging`);
        return
    }
    else
    {
        console.log("Please Enter User Name");
        return
        
    }
}
LogingStatus();