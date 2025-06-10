class User{
    constructor(username,passWord){
        this.username = username,
        this.passWord = passWord
    }

    get passWord(){
        return `${this._passWord}zoxxieee`
    }

    set passWord(newPassWord){
        this._passWord = newPassWord;
    }
}

const user1 = new User("Ram","123546");
console.log(user1.passWord);
