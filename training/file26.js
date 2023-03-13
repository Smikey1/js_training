class Animal {
    constructor(color, breed, type) {
        this.color = color;
        this.breed = breed;
        this.type = type
    }

    desc() {
        console.log(`The color of Animal is: ${this.color} and breed is: ${this.breed}`)
    }

    eat() {
        console.log("Animal is Eating")
    }

    makeSound() {
        console.log("Animal is making sound")
    }
}

class Dog extends Animal {

}

const my_dog = new Dog("red", "Dog-class");
my_dog.desc()



class Cat extends Animal {

    makeSound() {
        console.log("Meow Meow")
    }
}

const my_cat = new Cat("white", "Cat-class");
my_cat.makeSound()
