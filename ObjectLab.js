// Syntax 

const { normalize } = require("path/posix");


let videoGames = {
    Nintento:"Pokemon",
    Playstation:"GTA San Andreas",
}; 

// there is a key in this case being nintendo and playstation and the values are the strings after them. Curly braces make objects. 

let me = {
    name: "Anthony", 
    age: 26,
    email:'amalarwey@zooellow.com', 
}; 

console.log(me); 

console.log(me.name); 

me.age = 1000; 

console.log(me.age); 

let me = {
    name: "Anthony", 
    age: 26,
    email:'amalarwey@zooellow.com', 
}; 

me.placeOfResidence = "Los Angeles"; 

console.log(me.placeOfResidence); 

// Question 3 

const monster = {   
    name: "Slimer",
    color: "greenish",   
    type: "plasm or ghost or something",
    
    introduction(){
        console.log(`Hello my name is ${this.name} I am exactly ${this.age} years old`);
    }

}; 

console.log(monster.name); 

monster.type = 'creature'; 

console.log(monster.type); 

monster.age = 6; 

console.log(monster.age); 

console.log(monster); 

monster.introduction(); 

// Apply 

let Orge = { 
    name:"Shrek",
    health: 100,
    hitpoints: 15,
    greeting(){
        console.log(`Hello my name is ${this.name} how you doing ?`); 
    },

    takeDamage(amount){
        return this.health = this.health - amount; 

    },

    orgePunch(character)
    {
        return character.health = character.health - this.hitpoints; 
    }
};


let Adventurer = {

    name: 'Jaque', 
    health: 100, 
    hitpoints:25, 
    greeting(){
        console.log(`I'm the one and only ${this.name} and I'm here to defeat you`); 
    },

    takeDamage(amount){
        return this.health = this.health - amount; 
    }
}
console.log(Adventurer.takeDamage(Orge.hitpoints)); 
console.log(Orge.takeDamage(Adventurer.hitpoints)); 


// Hungry For More 

let cat1 = {
    name:'Garfield', 
    breed: 'Sphynx Cat', 
    age: 2000, 
}

console.log(cat1.age); 
console.log(cat1.breed); 


let cat2 = {
    name:'Felix', 
    breed:'Persian', 
    age:12, 
}
console.log(cat2.name); 
console.log(cat2.breed); 


