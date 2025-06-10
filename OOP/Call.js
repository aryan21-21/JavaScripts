function setUsername(name){
    this.name = name;
}
function user  (name,email,password){
    setUsername.call(this,name);
    this.email = email;
    this.password = password;
}

const user1 =new user("Ram","ram@gmail.com",123456);
console.log(user1);
