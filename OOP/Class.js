class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptedPassWord(){
        return `${this.password}1#Ascsdc789123`;
    }

    UserNameChanges(){
        return `${this.username.toUpperCase()}`;
    }
}

const USer1  = new User("Ram","ram@gmail.com",123456);
console.log(USer1.encryptedPassWord());
console.log(USer1.UserNameChanges());