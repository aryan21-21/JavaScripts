const User1 = {
    name : "Aryan",
    age :12,
    welcomeMessafe : function (){
        console.log(`${this.name} welcome our website`);
    }
}
User1.welcomeMessafe();

User1.name="Ram";
User1.welcomeMessafe();