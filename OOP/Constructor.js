function getUser(username,loginCount,isLogging){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogging = isLogging;
}

const user1 = new getUser("ram",12,true);
const user2 = new getUser("Shyam",18,false);
console.log(user1);
console.log(user2);
console.log(this
    
);

