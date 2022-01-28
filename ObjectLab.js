// Syntax 


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