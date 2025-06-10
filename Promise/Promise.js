// const promise =  new Promise(function(resolved,rejecet){
//     setTimeout(()=>{
//         console.log("Js");
//         resolved();
//     },1000)
    
// })
// Promise.than(()=>{ 
//     console.log("promise Commited`");
    
// })

const  p1 = new Promise(function(resolved,rejecet){
    setTimeout(function(){
        let Error = false;
        if(!Error){
            console.log("Resolved Called!");
            
            resolved("name");
        }
        else{
            rejecet("Error");
        }
    },1000)

})

async function consume() {
    try{
        await p1
    }
    catch(error){
        console.log("Error");
    }
}
consume();