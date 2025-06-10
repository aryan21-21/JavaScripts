class Animal{
    constructor(AnimalName){
        this.AnimalName = AnimalName;
    }

    AnimalNameIs(){
        return `Animal Name Is  : ${this.AnimalName}`;
    }
}

class Dog extends Animal
{
    constructor(AnimalName,Food){
        super(AnimalName);
        this.Food = Food;
    }

    FoodEating(){
        return `${this.AnimalName} Is Eating a ${this.Food}`;
    }
}

console.log(new Dog("Cat","Fish").FoodEating());
console.log(new Dog("Cat","Fish").AnimalNameIs());



console.log(new Dog() instanceof Animal);
console.log(new Animal() instanceof Dog);
