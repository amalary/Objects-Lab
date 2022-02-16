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
        this.health = this.health - amount; 

        console.log(`The Orgre lost ${this.health}`)

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

        this.health = this.health - amount; 

        console.log(`The Adveturer lost ${this.health}`)
    },

    swordSlash(character)
    {
        return character.health = character.health - this.hitpoints; 

    }
    
}; 

while(Adventurer.health > 0 && Orge.health > 0){

    if(Math.floor(Math.random()*2) == 0){
        Orge.takeDamage(Adventurer.hitpoints)
    }
    else {
        Adventurer.takeDamage(Orge.hitpoints); 
    }
};

if(Adventurer.health == 0){

    console.log('Surprisingly the Orge won!')
}
else { 
    console.log('The Adeveturer saved the day'); 

};

// Logic gates 

// Truth tables 






console.log(Adventurer.swordSlash(Orge));
console.log(Adventurer.takeDamage(Orge.hitpoints)); 
console.log(Orge.takeDamage(Adventurer.hitpoints)); 

let age = 2; 

while(age < 10){
    console.log(`You are now ${age} years old`);
    age++
}

console.log("You're a big kid now"); 





// Hungry For More 

let cat1 = {
    name:'Garfield', 
    breed: 'Sphynx', 
    age: 2000, 
}


// console.log(cat1.age); 
// console.log(cat1.breed); 


let cat2 = {
    name:'Felix', 
    breed:'Persian', 
    age:12, 
}
// console.log(cat2.name); 
// console.log(cat2.breed); 


function combineCats(mama,papa){

    let cat3 = {
        age: 1, 

    }

    cat3.name = mama.name + papa.name;

    cat3.breed = `${mama.breed}-${papa.breed}`

    return cat3

}; 

combineCats(cat1, cat2)

console.log(combineCats(combineCats(cat1,cat2), combineCats(cat1, cat2))); 